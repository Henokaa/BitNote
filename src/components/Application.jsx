import React, { Component } from 'react';
import firestore from '../firebase';
import Posts from './Posts';
import 'firebase/firestore';
import firebase from "firebase/app";
import { collectIdsAndDocs } from '../utilities';
//import collectIdsAndDocs from "../utilities";

class Application extends Component {
  state = {
    posts: [
      // {
      //   id: '1',
      //   title: 'A Very Hot Take',
      //   content:
      //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!',
      //   user: {
      //     uid: '123',
      //     displayName: 'Bill Murray',
      //     email: 'billmurray@mailinator.com',
      //     photoURL: 'https://www.fillmurray.com/300/300',
      //   },
      //   stars: 1,
      //   comments: 47,
      // },
    ],
  };

  unscribe = null;

  componentDidMount = async () => {    //imediately after initial rendering
    const firestore = firebase.firestore(); 
    this.unscribe = firestore.collection(`posts`).onSnapshot(snapshot => {
    const posts = snapshot.docs.map(collectIdsAndDocs);
    this.setState({ posts });
    });
  };

   componentWillUnmount = () => { // immediately before removing component from DOM
      this.unsubscribe();
    }
    // is executed after the first render only on the client side. 
    //This is where AJAX requests and DOM or state updates should occur.
  //   const firestore = firebase.firestore();  // its using promises, and this will wait for the promise to resolve, and then it will go into that snapshot object
  //    const snapshot = await firestore.collection('posts').get();
  //   //  snapshot.forEach(doc => { // getting data from the firebase cloud database
  //   //    const id = doc.id;
  //   //    const data = doc.data();
  //   //    console.log({ id, data });
  //   //  });
  //   const posts = snapshot.docs.map(collectIdsAndDocs);
  //   this.setState({ posts });

  //   console.log({ snapshot });
  // }

  handleCreate = async post => {   // handlecreate is the function & post  is the parameter
    const { posts } = this.state;
    const firestore = firebase.firestore();
    const docRef = await firestore.collection('posts').add(post);
    const doc = await docRef.get();
    const newPost = collectIdsAndDocs(doc);

    this.setState({ posts: [newPost, ...posts] });
  };

  handleRemove = async (id) => {
    const firestore = firebase.firestore();
    const allposts = this.state.posts;
    await firestore.doc(`posts/${id}`).delete();
    const posts = allposts.filter(post => post.id !== id)
    this.setState({ posts });
  };

  render() {
    const { posts } = this.state;  // onCreate() which triigers when new data is created in realtime Database.
    return (
      <main className="Application">
        <h1>BitNotes</h1>
        <Posts 
        posts={posts} 
        onCreate={this.handleCreate} 
        onRemove={this.handleRemove} 
        />     
      </main>
    );
  }
}

export default Application;
