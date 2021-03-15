import firebase from "firebase/app";
import "firebase/auth";
import './App.css';
import firebaseConfig from './firebase.config';


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

function App() {
  const provider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      
      console.log(errorCode, errorMessage, email, credential);
    });
  }

  return (
    <div className="App">
       <button onClick={handleGoogleSignIn}>Sign in using google</button>
    </div>
  );
}

export default App;
