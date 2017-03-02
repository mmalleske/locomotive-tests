import React from 'react';

export default class Block extends React.Component {

  getStyle() {
    let url = this.props.background;

    if (typeof(url) === 'undefined' || url === null)
      return {};
    else
      return { backgroundImage: `url(${url})` };
  }

  render() {
    let Tag = this.props.tag || 'div';
    const blockProps = Object.assign({}, this.props);
    delete blockProps.tag;
    delete blockProps.background;
    delete blockProps.block;

    return (
      <Tag {...blockProps} data-site-builder-block-id={this.props.block.id} style={this.getStyle()}>
        {this.props.children}
      </Tag>
    );
  }

}

