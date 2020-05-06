import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.scss';
export class SharedButton extends Component {
  static propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func,
  };

  submitEvent = () => {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  };

  render() {
    return (
      <button data-test='btnComp' onClick={this.submitEvent}>
        {this.props.buttonText}
      </button>
    );
  }
}

export default SharedButton;
