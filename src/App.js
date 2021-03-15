import firebase from "firebase/app";
import "firebase/auth";
import './App.css';
import firebaseConfig from './firebase.config';


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

function App() {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase.auth()
    .signInWithPopup(providerGoogle)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;
      console.log(user, token);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      
      console.log(errorCode, errorMessage, email, credential);
    });
  }

  //Facebook 
  const providerFacebook = new firebase.auth.FacebookAuthProvider();
  const handleFacebookSignIn = () => {
    firebase.auth()
    .signInWithPopup(providerFacebook)
    .then((result) => {
      var credential = result.credential;
      var user = result.user;
      var accessToken = credential.accessToken;
      console.log(user, accessToken);

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
    });
  }


  const providerGithub = new firebase.auth.GithubAuthProvider();
  const handleGithubSignIn= () => {
    firebase.auth()
    .signInWithPopup(providerGithub)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;

      console.log(user, token);
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
       <button onClick={handleGoogleSignIn}>Sign in using Google</button>
       <br/>
       <button onClick={handleFacebookSignIn}>Sign in using Facebook</button>
       <br/>
       <button onClick={handleGithubSignIn}>Sign in using Github</button>
    </div>
  );
}

export default App;
