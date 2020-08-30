import firebase from 'firebase/app'
import {fbcfg} from "./fb";
import 'firebase/firestore'
import 'firebase/auth'


firebase.initializeApp(fbcfg);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;