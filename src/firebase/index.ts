import { AngularFireModule } from 'angularfire2';


export const firebaseConfig = {
      apiKey: "AIzaSyA7dOtnI6IxEVYtgpW8UdqG4v00Pc64j0M",
    authDomain: "cloudserviceprovider-9000c.firebaseapp.com",
    databaseURL: "https://cloudserviceprovider-9000c.firebaseio.com",
    projectId: "cloudserviceprovider-9000c",
    storageBucket: "cloudserviceprovider-9000c.appspot.com",
    messagingSenderId: "17926531792"
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
