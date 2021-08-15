import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

<script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script>; 
     var firebaseConfig = {
        apiKey: "AIzaSyCDkndZZhEEvQuELnFO3iBh8X6sQdbYH7o",
        authDomain: "secproject-3e622.firebaseapp.com",
        databaseURL: "https://secproject-3e622.firebaseio.com",
        projectId: "secproject-3e622",
        storageBucket: "secproject-3e622.appspot.com",
        messagingSenderId: "575554634707",
        appId: "1:575554634707:web:4256d80e8b7beeb468a526"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    console.log("hey"); 
    const projectstorage = firebase.storage();
    const projectfirebase = firebase.firestore();

const Notes = () => {
  const [title, updatetitle] = useState("");
  const [note, updatenote] = useState("");
  
 // var ref = projectstorage.ref('notedata');
  function createNote(e) {
    e.preventDefault();
    if (title !== "" && note !== "")
    projectstorage.ref('notedata').push({
        title: title,
        note: note,
    });
  }
   return (
    <section className="noteform">
      <h3>Create New Note</h3>
      <div className="form-group">
        <label htmlFor="noteform-title">Title</label>
        <input
          type="text"
          id="noteform-title"
          name="noteform-title"
          value={title}
          placeholder="Title"
          onChange={(e) => updatetitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="noteform-note">Note</label>
        <textarea
          type="text"
          name="noteform-note"
          id="noteform-note"
          value={note}
          placeholder="Note"
          onChange={(b) => updatenote(b.target.value)}
        ></textarea>
      </div>
      <button onClick={createNote}>Create Note</button>

      {/* <input
        id="location"
        value={location}
        placeholder="Location"
        onChange={(e) => updateLocation(e.target.value)}
      /> */}
    </section>
  );
};

export default Notes;


