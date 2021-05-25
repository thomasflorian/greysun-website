import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const [currUser, setCurrUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function signin(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signout() {
        return auth.signOut()
    }

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user => {
            setCurrUser(user)
            setLoading(false)
        })
        return unsub
    }, [])

    const value = {
        currUser,
        signup,
        signin,
        signout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}