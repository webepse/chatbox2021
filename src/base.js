import Rebase from 're-base'
// optimisation (plus rapide et plus legère)
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyARvCnsqxMbya3z_VCymAuqNVZ8X5Qm0xk",
    authDomain: "chatbox-student.firebaseapp.com",
    databaseURL: "https://chatbox-student-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = Rebase.createClass(firebase.database()) // gestion de la base de données

export {firebaseApp} // initialisation de l'application 

export default base