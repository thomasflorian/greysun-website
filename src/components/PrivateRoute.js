import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function PrivateRoute({ children, ...props}) {

    const {currUser} = useAuth()

    return (
        <Route {...props} children={currUser ? children : <Redirect to="/signin" />} />
    )

}

export default PrivateRoute