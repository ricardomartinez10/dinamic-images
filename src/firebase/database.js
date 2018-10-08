import Firebase from 'firebase';
var config = {
  apiKey: "AIzaSyD3PNNUALg7tS5kr96flk57G0NoVpt6bEQ",
  authDomain: "dinamicimages-4b07b.firebaseapp.com",
  databaseURL: "https://dinamicimages-4b07b.firebaseio.com",
  projectId: "dinamicimages-4b07b",
  storageBucket: "dinamicimages-4b07b.appspot.com",
  messagingSenderId: "962418342302"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
