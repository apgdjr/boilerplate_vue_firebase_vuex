import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyBtmpOj95CxXnJFDBlh66O8jbJee_R0sc8",
  authDomain: "my-firecloud-d7c41.firebaseapp.com",
  databaseURL: "https://my-firecloud-d7c41.firebaseio.com",
  projectId: "my-firecloud-d7c41",
  storageBucket: "my-firecloud-d7c41.appspot.com",
  messagingSenderId: "712808873366",
  appId: "1:712808873366:web:7ec5f0bcc9eedf2aa6b1b7",
  measurementId: "G-XYJ8XZVPCJ"
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
};
