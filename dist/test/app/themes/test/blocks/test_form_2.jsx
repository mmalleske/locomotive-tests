import React from 'react';
import SiteBuilderBlock from './common/block';
import SiteBuilderList from './common/list';
import SiteBuilderText from './common/text';
import SiteBuilderLink from './common/link';

/**
  TestForm2 block (type: test_form_2)

  Fields:
    - title (string). Example: "var value = this.props.block.content.title;"
    - text (text). Example: "var value = this.props.block.content.text;"
    - button_label (string). Example: "var value = this.props.block.content.button_label;"
    - postURL (link). Example: "var value = this.props.block.content.postURL;"
    - agentID (string). Example: "var value = this.props.block.content.agentID;"
    - background (image). Example: "var value = this.props.block.content.background;"

  If your field is a string, you need to call the dangerouslySetInnerHTML method in your tag to prevent ReactJS to stop the rendering of the block for security reason. Example:

    var html = this.props.block.content.headline;
    <h1 className="text-center" dangerouslySetInnerHTML={{ __html: htmlContent }} />
*/

export default class TestForm2 extends React.Component {

  render() {
    var content = this.props.block.content;

    return(

      <SiteBuilderBlock tag="div" className="your-class-name" block={this.props.block}>
        <div class="test-form-2">
          <SiteBuilderText tag="h2" className="your-class-name" value={content.title} />
          <SiteBuilderText tag="p" className="your-class-name" value={content.text} />
          <form action={content.postURL} method="post" id="about-yourself-form">
            <label htmlFor="contactfirstname" className="">First Name</label>
            <input type="text" className="" id="contactfirstname" name="contactfirstname" placeholder="First Name" required={true} />
            <label htmlFor="contactlastname" className="">Last Name</label>
            <input type="text" className="" id="contactlastname" name="contactlastname" placeholder="Last Name" required={true} />
            <label htmlFor="contactphone" className="">Phone #</label>
            <input type="text" className="" id="contactphone" name="contactphone" placeholder="555-555-5555" required={true} />
            <label htmlFor="contactemail" className="">Email</label>
            <input type="text" className="" id="contactemail" name="contactemail" placeholder="Email" required={true} />
            <label htmlFor="contactoptions" className="">Best time to reach you:</label>
            <select className="" id="contactoptions" name="contactoptions">
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
              <option>Nighttime</option>
              <option>Any time</option>
            </select>
            <label htmlFor="otherdetails" className="">Other Details</label>
            <input type="textarea" className="" id="otherdetails" name="otherdetails" placeholder="Give us a few words about yourself" required={false} />
          </form>
        </div>
        <SiteBuilderButton type="submit" className="" value={content.button_label} data-loading-text="Sending..." />
      </SiteBuilderBlock>
    );
  }

}
