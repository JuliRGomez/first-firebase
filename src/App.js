import logo from './logo.svg';
import './App.css';
import firebase, {auth} from "./firebase/config"
import {startUi} from "./firebase/config"
function App() {

  let provider= new firebase.auth.GoogleAuthProvider();

  const signInGoogle=()=>{
    firebase.auth().signInWithPopup(provider)
      .then(result=>{
        let token=result.credential.accessToken;
        let user=result.user; 
      }).catch(error=>{
        console.log(error)
      })
  }
  return (
    <div className="App">
        <button onClick={signInGoogle}>Sign In with google</button>
    </div>
  );
}

export default App;
