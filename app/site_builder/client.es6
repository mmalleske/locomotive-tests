// Locomotive SiteBuilder core file. DO NOT MODIFY IT!

import React from 'react';
import ReactDOM from 'react-dom';

import Page from './page';
import definitions from '../themes/definitions';
import assetPath from './asset_path';

export default {

  render: function() {
    let site          = window.SiteBuilder.site;
    let page          = window.SiteBuilder.page;

    let theme_handle  = site.theme_handle;
    let definition    = definitions[theme_handle];

    ReactDOM.render(
      <Page
        site={site}
        page={page}
        definitions={definition.blocks}
        assetPath={assetPath} />,
      document.getElementById('locomotive-site-builder-page-anchor')
    )
  }

}

