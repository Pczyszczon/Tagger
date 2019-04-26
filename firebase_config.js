import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyCKrSSnP0KkzIGDSW5Ir72v_WIZu7xWtj4",
	authDomain: "tagger-723d7.firebaseapp.com",
	databaseURL: "https://tagger-723d7.firebaseio.com",
	projectId: "tagger-723d7",
	storageBucket: "tagger-723d7.appspot.com",
	messagingSenderId: "929557013199"
};
var firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
