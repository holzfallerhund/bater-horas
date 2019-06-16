import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Firebase, { FirebaseContext } from './components/firebase'

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('service worker registered'))
        .catch(err => console.log('service worker not registered', err))
}

ReactDOM.render(
    <FirebaseContext.Provider value={ new Firebase() }>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
)
