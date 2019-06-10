import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Firebase, { FirebaseContext } from './components/firebase'

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('SW registered: ', registration)
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError)
        })
    })
}

ReactDOM.render(
    <FirebaseContext.Provider value={ new Firebase() }>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
)
