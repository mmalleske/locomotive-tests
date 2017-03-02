import React from 'react';
import SiteBuilderBlock from './common/block';
import SiteBuilderList from './common/list';
import SiteBuilderText from './common/text';
import SiteBuilderLink from './common/link';

/**
  TestForm block (type: test_form)

  Fields:
    - title (string). Example: "var value = this.props.block.content.title;"
    - text (text). Example: "var value = this.props.block.content.text;"
    - button_label (text). Example: "var value = this.props.block.content.button_label;"
    - postURL (link). Example: "var value = this.props.block.content.postURL;"
    - agentID (text). Example: "var value = this.props.block.content.agentID;"
    - background (image). Example: "var value = this.props.block.content.background;"
    
  If your field is a string, you need to call the dangerouslySetInnerHTML method in your tag to prevent ReactJS to stop the rendering of the block for security reason. Example:

    var html = this.props.block.content.headline;
    <h1 className="text-center" dangerouslySetInnerHTML={{ __html: htmlContent }} />
*/

export default class TestForm extends React.Component {

  render() {
    var content = this.props.block.content;

    return(
      <SiteBuilderBlock tag="div" className="your-class-name" block={this.props.block}>
        <h2>TestForm block</h2>
        <div>
          <SiteBuilderText tag="div" className="your-class-name" value={content.title} />
          <SiteBuilderText tag="div" className="your-class-name" value={content.text} />
          <SiteBuilderText tag="div" className="your-class-name" value={content.button_label} />
          <SiteBuilderLink className="your-class-name" value={content.postURL} allowEmpty={false}/>
          <SiteBuilderText tag="div" className="your-class-name" value={content.agentID} />
          <img src={this.props.assetPath(content.background)} />
        </div>
      </SiteBuilderBlock>
    );
  }

}
