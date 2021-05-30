import React, { useContext, useState, useEffect } from 'react'
import firebase from 'firebase'
import { auth } from '../firebase'

const AuthContext = React.createContext()
const firestore = firebase.firestore()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currUser, setCurrUser] = useState()
    const [loading, setLoading] = useState(true)

    async function signup(firstname, lastname, email, password) {
        const credentials = await auth.createUserWithEmailAndPassword(email, password)
        const timestamp = new Date()
        await firestore.collection('users').doc(credentials.user.uid).set({ blows: [], firstname, lastname, accountCreated: firebase.firestore.Timestamp.fromDate(timestamp)})
    }

    function signin(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signout() {
        return auth.signOut()
    }

    function resetpassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setCurrUser(user)
            setLoading(false)
        })
        return [unsub]
    }, [])

    const value = {
        currUser,
        signup,
        signin,
        signout,
        resetpassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}