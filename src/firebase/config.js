import firebase from "firebase";
import firebaseui from "firebaseui"

const firebaseConfig={
    apiKey: "AIzaSyBpgfMj7lHlIyOXyeLAcjexA9WoS3gP5WA",
    authDomain: "asistencia-38914.firebaseapp.com",
    databaseURL: "https://asistencia-38914.firebaseio.com",
    projectId: "asistencia-38914",
    storageBucket: "asistencia-38914.appspot.com",
    messagingSenderId: "751737961900",
    appId: "1:751737961900:web:e3bdfbe62a4f1946ef4e09"
}

const uiConfig={
    signInOptions:[
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    
    ]
    
}

firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth();
export default firebase;
export const startUi=()=>{
    const ui= new firebaseui.auth.AuthUI(auth);
    ui.start(elementId,uiConfig)
}