import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Header from './components/header/Header';
import Headline from './components/headline/Headline';
import SharedButton from './components/button';
import ListItem from './components/ListItem/ListItem';
import { fetchPosts } from './actions/FetchPostsAction';

const tempArr = [
  {
    fName: 'John',
    lName: 'Doe',
    email: 'JohnDoe@gmail.com',
    age: 26,
    onlineStatus: true,
  },
];

function App(props) {
  const { posts } = props;
  // console.log(posts);
  const btnConfig = {
    buttonText: 'Get Posts',
    emitEvent: props.fetchPosts,
  };

  return (
    <div className='App' data-test='appComponent'>
      <Header />
      <section className='main'>
        <Headline
          header='Posts'
          desc='Click here to see the posts!'
          tempArr={tempArr}
        />
        <SharedButton {...btnConfig} />
        {posts &&
          posts.map(({ title, body, id }) => (
            <ListItem title={title} desc={body} key={id} />
          ))}
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps, { fetchPosts })(App);
