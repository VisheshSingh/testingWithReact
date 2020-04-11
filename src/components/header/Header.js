import React from 'react';
import './Header.scss';

const Header = (props) => {
  return (
    <header data-test='header'>
      <div className='wrapper'>
        <div data-test='logo' className='logo'>
          <h1>My Logo</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
