import React from 'react';
import SiteBuilderBlock from './common/block';
import SiteBuilderList from './common/list';
import SiteBuilderText from './common/text';
import SiteBuilderLink from './common/link';

/**
  Header block (type: header)

  Fields:
    - title (string). Example: "var value = this.props.block.content.title;"
    - background (image). Example: "var value = this.props.block.content.background;"

  If your field is a string, you need to call the dangerouslySetInnerHTML method in your tag to prevent ReactJS to stop the rendering of the block for security reason. Example:

    var html = this.props.block.content.headline;
    <h1 className="text-center" dangerouslySetInnerHTML={{ __html: htmlContent }} />
*/

export default class Header extends React.Component {

  render() {
    var content = this.props.block.content;

    return(
      <SiteBuilderBlock tag="div" className="your-class-name" block={this.props.block}>
        <h2>{content.title}</h2>
        <div>
          <SiteBuilderText tag="div" className="your-class-name" value={content.title} />
          <img src={this.props.assetPath(content.background)} />
        </div>
      </SiteBuilderBlock>
    );
  }

}
