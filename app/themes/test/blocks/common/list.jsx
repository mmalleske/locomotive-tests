import React from 'react';

export default class List extends React.Component {

  addSeparatorsTo(array) {
    if (this.props.separatorEvery && this.props.separtorClassName) {
      var numberOfRows = (array.length / this.props.separatorEvery) - 1;

      if (numberOfRows > 0) {
        for(var i = 0; i < numberOfRows; i++) {
          array.splice(
            (i + 1) * this.props.separatorEvery, 0,
            (
              <div key={`separator-${i}`} className={this.props.separtorClassName} />
            )
          );
        }
      }
    }
  }

  renderItems(sortedList) {
    let array = sortedList.map(function(item, index) {
      let key = item.id || index;

      return this.props.children(item.content, key, index);
    }.bind(this));

    this.addSeparatorsTo(array);

    return array;
  }

  renderArray(Tag, list, listProps) {
    if (list.length === 0) return null;

    let sortedList = list.sort((a, b) => (a.position || 0) - (b.position || 0))

    return (
      <Tag {...listProps}>
        {this.renderItems(sortedList)}
      </Tag>
    );
  }

  renderHash(Tag, hash, listProps) {
    let items = Object.keys(hash).map(function(name, index) {
      let value = hash[name];

      if (typeof(value) === 'undefined' || value === '') return null;

      let key = value.id || index;

      return this.props.children(name, value, key, index);
    }.bind(this));

    this.addSeparatorsTo(items);

    return (
      <Tag {...listProps}>{items}</Tag>
    );
  }

  render() {
    var list  = this.props.list;
    let Tag   = this.props.tag || 'div';
    const listProps = Object.assign({}, this.props);
    delete listProps.tag;
    delete listProps.list;
    delete listProps.separatorEvery;
    delete listProps.separtorClassName;

    if (typeof(list) === 'undefined') return null;

    if (list.constructor === Array)
      return this.renderArray(Tag, list, listProps);
    else
      return this.renderHash(Tag, list, listProps);
  }
}
