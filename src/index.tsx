import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from "./components/Routes/Routes";
import './index.css';

import * as firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import {AuthProvider} from "./components/providers/AuthProvider";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
firebase.initializeApp({
    apiKey: "AIzaSyC2HPietffyypNBIKHTpS0piOn7uBQP-Gk",
    authDomain: "vk-copy-8fe23.firebaseapp.com",
    projectId: "vk-copy-8fe23",
    storageBucket: "vk-copy-8fe23.appspot.com",
    messagingSenderId: "164235656678",
    appId: "1:164235656678:web:bf8e15044ddbdc2949ea27"
});




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <AuthProvider>
          <Routes/>
      </AuthProvider>
  </React.StrictMode>
);

