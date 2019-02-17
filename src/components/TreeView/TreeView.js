import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Custom Components
import './TreeView.scss';
import TreeItem from './TreeItem';

/*
* TreeView: Main Component
* @return {JSX.Element}
*/
export default class TreeView extends Component {
  static propTypes = {
    heading: PropTypes.string,
    items: PropTypes.shape({
      label: PropTypes.string.isRequired,
      items: PropTypes.array,
    }).isRequired,
  }

  render() {
    const { items, heading } = this.props;

    return (
      <div className="c-tree-view">

        { heading && (
          <div className="c-tree-view__nodes-header">
            <h2 className="c-tree-view__heading">
              <i className="icon material-icons"
                aria-hidden="true">view_list</i>
              <span className="c-tree-view__title">{ heading }</span>
            </h2>
          </div>
        ) }

        <ul className="c-tree-view__nodes-list c-tree-view__item-children">
          <TreeItem { ...items } />
        </ul>

      </div>
    );
  }
}
