// Locomotive SiteBuilder core file. DO NOT MODIFY IT!

import React from 'react';

export default class Page extends React.Component {

  renderBlocks() {
    let site      = this.props.site;
    let assetPath = this.props.assetPath;
    let blocks    = this.props.page.content.blocks;
    let sorted_blocks = blocks.sort((a, b) => a.position - b.position)

    return sorted_blocks.map(function(block, index) {
      let Child = this.props.definitions[block.type];
      let block_id = `site-builder-block-${block.id || index}`;

      if (typeof(Child) === 'undefined')
        return(
          <div key={block_id} style={{ textAlign: 'center', background: 'red', padding: '5px 10px', color: '#fff' }}>Unknown block {block.type}</div>
        );
      else
        return (
          <Child key={block_id} site={site} block={block} assetPath={assetPath} />
        );
    }.bind(this));
  }

  render() {
    return (
      <div id="locomotive-site-builder-page">
        {this.renderBlocks()}
      </div>
    );
  }

}
