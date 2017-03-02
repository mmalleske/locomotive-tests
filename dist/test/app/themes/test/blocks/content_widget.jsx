import React from 'react';
import SiteBuilderBlock from './common/block';
import SiteBuilderList from './common/list';
import SiteBuilderText from './common/text';
import SiteBuilderLink from './common/link';

/**
  ContentWidget block (type: content_widget)

  Fields:
    - title (string). Example: "var value = this.props.block.content.title;"
    - background (image). Example: "var value = this.props.block.content.background;"
    - description (string). Example: "var value = this.props.block.content.description;"

  If your field is a string, you need to call the dangerouslySetInnerHTML method in your tag to prevent ReactJS to stop the rendering of the block for security reason. Example:

    var html = this.props.block.content.headline;
    <h1 className="text-center" dangerouslySetInnerHTML={{ __html: htmlContent }} />
*/

export default class ContentWidget extends React.Component {

  render() {
    var content = this.props.block.content;

    return(
      <SiteBuilderBlock tag="div" className="content-widget" block={this.props.block}>
        <div id="wtfisthis">
          <SiteBuilderText tag="h2" className="your-class-name" value={content.title} />
          <img src={this.props.assetPath(content.background)} />
          <SiteBuilderText tag="p" className="your-class-name" value={content.description} />
        </div>
      </SiteBuilderBlock>
    );
  }

}
