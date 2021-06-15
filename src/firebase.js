import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA5dUzFCQTe0hZ3T9qcsd92Nr_QqL5J',
  authDomain: 'queenzz.firebaseapp.com',
  projectId: 'queenzz',
  storageBucket: 'queenzz.appspot.com',
  messagingSenderId: '14316713533',
  appId: '1:14316713533:web:d352009d32763af8b15c54',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
