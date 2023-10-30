import * as firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCKULywReT4SnAsTXuq4CnfprF9AB5CKaI',
  authDomain: 'chat-app-faddc.firebaseapp.com',
  projectId: 'chat-app-faddc',
  storageBucket: 'chat-app-faddc.appspot.com',
  messagingSenderId: '529595558932',
  appId: '1:529595558932:web:7d954b9bcb3f7cfe6b4b01',
};

const db = firebase.initializeApp(config);

export default db;
