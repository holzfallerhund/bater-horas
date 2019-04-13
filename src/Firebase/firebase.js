import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const prodConfig = {
    apiKey: process.env.REACT_APP_PROD_API_KEY,
    authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
    projectId: process.env.REACT_APP_PROD_PROJECT_ID,
    storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
}

const devConfig = {
    apiKey: process.env.REACT_APP_DEV_API_KEY,
    authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
    projectId: process.env.REACT_APP_DEV_PROJECT_ID,
    storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
}

const config =
    process.env.NODE_ENV === 'production' ? prodConfig : devConfig

class Firebase {
    constructor() {
        app.initializeApp(config)

        this.auth = app.auth()
        this.db = app.firestore()
        app.firestore().enablePersistence()
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password)

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password)

    doSignOut = () => this.auth.signOut()

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password)

    user = uid => this.db.doc(`users/${uid}`)

    users = () => this.db.collection('users')

    userUid = () => this.auth.currentUser.uid

    writeAppointment = (collectionData, documentData) =>
        this.db.collection(this.userUid())
            .doc('appointments')
            .collection(collectionData)
            .add(documentData)

    writeDescription = (collectionData, documentId) =>
        this.db.collection(this.userUid())
            .doc('appointments')
            .collection(collectionData)
            .doc(documentId)


    getAppointments = (collection) => this.db.collection(this.userUid())
        .doc('appointments')
        .collection(collection)
        .orderBy('date')
}

export default Firebase