import React from 'react';
import TestForm2 from './blocks/test_form_2';


export default class Layout extends React.Component {

  render() {
    return(
      <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
        <head>
          <title>{this.props.site.name}</title>

          <link rel="stylesheet" href={this.props.assetPath('/themes/test/stylesheets/font-awesome.min.css')} />
          <link rel="stylesheet" href={this.props.assetPath('/themes/test/frontend.css')} />
          <script type="text/javascript" src={this.props.assetPath('/themes/test/frontend.js')} />
          <script dangerouslySetInnerHTML={{__html: `
            require('themes/test/frontend/javascripts/main');
          `}} />
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    )
  }

}
