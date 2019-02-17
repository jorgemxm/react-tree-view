import React, { Component } from 'react';

// Custom Modules
import * as itemsAPI from '@/utils/itemsAPI';
import TreeView from '@/components/TreeView';

export default class App extends Component {
  state = {
    items: {},
  };

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    itemsAPI.getAll()
      .then(({ items }) => this.setState({ items }));
  }

  render() {
    const { items } = this.state;

    return (
      <div className="c-app">
        <div className="container">

          {/* Render the TreeView component only if the parent-label exists */}
          { items.label && (
            <TreeView
              heading="TreeView Component"
              items={ items }
            />
          ) }

        </div>
      </div>
    )
  }
}
