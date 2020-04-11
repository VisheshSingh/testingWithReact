import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';

function App() {
  return (
    <div className='App'>
      <Header />
      <section className='main'>
        <Headline header='Posts' desc='Click here to see the posts!' />
      </section>
    </div>
  );
}

export default App;
