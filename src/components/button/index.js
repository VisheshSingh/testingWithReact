import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SharedButton extends Component {
  static propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func,
  };

  render() {
    return <button></button>;
  }
}

export default SharedButton;
