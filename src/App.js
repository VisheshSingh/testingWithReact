import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';

const tempArr = [
  {
    fName: 'John',
    lName: 'Doe',
    email: 'JohnDoe@gmail.com',
    age: 26,
    onlineStatus: true,
  },
];
function App() {
  return (
    <div className='App'>
      <Header />
      <section className='main'>
        <Headline
          header='Posts'
          desc='Click here to see the posts!'
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
