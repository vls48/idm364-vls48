import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB_U8zIzqEQdvp6ksa3YHdlHSMLGf3pJ0A",
    authDomain: "obey-giant.firebaseapp.com",
    databaseURL: "https://obey-giant.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;