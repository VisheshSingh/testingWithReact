import React, { Component } from 'react';
import './Headline.scss';
import PropTypes from 'prop-types';

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

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool,
    })
  ),
};

export default Headline;
