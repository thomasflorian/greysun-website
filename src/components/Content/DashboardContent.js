import React, { useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

function DashboardContent(props) {

    const { currUser } = useAuth()

    // Reset scroll on page load
    useEffect(() => {window.scrollTo(0,0)}, [])

    return (
        <Container style={{height:"600px", display:"flex", flexWrap:"wrap", justifyContent:"center", textAlign:"center", alignContent:"start"}}>
            <Typography variant="h1" style={{width:"100%"}}>Your Dashboard</Typography>
            <Typography variant="h6">{currUser ? `Welcome ${currUser.email}` : "No user is logged in"}</Typography>
        </Container>
    )

}

export default DashboardContent