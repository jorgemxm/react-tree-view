/**
* TreeItem Component: It Renders Child Nodes
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export default class TreeItem extends Component {

  static propTypes = {
    isExpanded: PropTypes.bool,
    label: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        items: PropTypes.array
      })
    )
  }

  // Default Props
  static defaultProps = {
    label: '',
    items: [],
  }

  // Default State
  state = {
    isExpanded: true
  }

  /**
  *
  */
  getClassNames() {
    const { isExpanded } = this.state;
    const hasChildItems = this.props.items.length;

    return classNames(
      'c-tree-view__item',
      {
        'is-expanded': isExpanded,
        'has-children': hasChildItems
      }
    );
  }

  /**
  * Accessibility Enhancements
  */
  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.toggleState();
    }
  }

  /**
  * Handle Click Event only if the current Node has Child Nodes
  */
  handleToggle = event => {
    if (this.props.items.length) {
      this.toggleState();
    }
  }


  /**
  * Update Collapsed/Expanded Node State
  */
  toggleState = () => {
    this.setState((state, props) => ({
      isExpanded: !state.isExpanded
    }));
  }


  render() {
    let { label, items } = this.props;

    // 1. Validate if the Current Node has Child Nodes or not.
    const childItems = (items)
    ? items.map((node, index) => (<TreeItem key={ index } {...node } />))
    : [];

    const hasChildItems = (childItems.length > 0);

    // 2. Set default icon when the Current Node doesn't have Child Nodes
    const iconDefault = (
      <i className="icon icon-default material-icons"
      aria-hidden="true">radio_button_unchecked</i>
    );

    // 2. Set Icon used when the Current Node has Child Nodes
    const iconsToggleState = (
      <i className="icon icon-toggle material-icons"
      aria-hidden="true">keyboard_arrow_right</i>
    );

    const itemCssClasses = this.getClassNames();

    return (
      <li className={ itemCssClasses }>
        <div
          className="c-tree-view__item-title"
          onClick={ this.handleToggle }
          tabIndex={ hasChildItems ? '0' : undefined }
          onKeyPress={ this.handleKeyPress }
        >
        {/* Render a custom icon based on if the current node has child items or not */}
        { !hasChildItems
          ? iconDefault
          : iconsToggleState
        }
          <span className="c-tree-view__item-label">{ label }</span>
        </div>

        {/* Render Child Items if any. */}
        { hasChildItems && (
          <ul className="c-tree-view__item-children">
          { childItems }
          </ul>
        ) }

      </li>
    )
  }
}
