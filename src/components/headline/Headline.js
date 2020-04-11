import React, { Component } from 'react';
import './Headline.scss';

class Headline extends Component {
  render() {
    const { header, desc } = this.props;

    if (!header || !desc) {
      return;
    }

    return (
      <div data-test='header-container' className='header-container'>
        <h2 data-test='title'>{header}</h2>
        <p data-test='description'>{desc}</p>
      </div>
    );
  }
}

export default Headline;
