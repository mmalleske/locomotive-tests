// Locomotive SiteBuilder core file. DO NOT MODIFY IT!

import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import definitions from '../themes/definitions';
import Page from './page';
import assetPath from './asset_path';

let setIframeHTML = function(html) {
  let doc = document.getElementById('locomotive-site-builder-iframe').contentDocument;
  doc.open();
  doc.write(html);
  doc.close();
}

let loadSample = function(themeHandle, callback) {
  console.log(`Loading samples for ${themeHandle}`);

  $.getJSON(`/samples/${themeHandle}.json`, function(data) {
    callback(null, data.site, data.page);
  }).fail(function() {
    console.log('Missing or wrong theme sample JSON file');
  });;
}

export default {

  render: function(theme_handle) {
    console.log(`Rendering page for ${theme_handle}`);

    let definition = definitions[theme_handle];
    let Layout = definition.layout;

    loadSample(theme_handle, function(err, site, page) {
      let html = ReactDOMServer.renderToStaticMarkup(
        <Layout site={site} page={page} assetPath={assetPath}>
          <div id="locomotive-site-builder-page-anchor">
            <Page site={site} page={page} definitions={definition.blocks} assetPath={assetPath} />
          </div>

          <script src="/site_builder/client.js" type="text/javascript"></script>

          <script dangerouslySetInnerHTML={{__html: `
            window.SiteBuilder = {};
            window.SiteBuilder.site = ${JSON.stringify(site)};
            window.SiteBuilder.page = ${JSON.stringify(page)};

            var Client = require('site_builder/client');

            document.addEventListener('DOMContentLoaded', function() {
              Client.default.render();
            });
          `}} />
        </Layout>
      );

      setIframeHTML(html);
    });
  }

}
