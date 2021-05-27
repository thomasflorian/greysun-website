import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import { useAuth } from '../../contexts/AuthContext'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const firestore = firebase.firestore()


function DashboardContent(props) {

    const [blows, setBlows] = useState([])
    const [loading, setLoading] = useState(false)
    const { currUser } = useAuth()

    function getBlows() {
        setLoading(true)
        firestore.collection('users').doc(currUser.uid).onSnapshot(querySnapshot => {
            const items = querySnapshot.data().blows
            setBlows(items)
            setLoading(false)
        })
    }

    // Reset scroll on page load
    useEffect(() => {window.scrollTo(0,0)}, [])
    // Loads blows
    useEffect(getBlows, [currUser.uid])
    const blowComponents = blows.map((blow, i) => (<li key={i}>{`BAC was ${blow.bac} at ${blow.timestamp.toDate().getHours()}:${blow.timestamp.toDate().getMinutes()} on ${blow.timestamp.toDate().toDateString()}`}</li>))

    return (
        <Container style={{height:"600px", display:"flex", flexWrap:"wrap", justifyContent:"center", textAlign:"center", alignContent:"start"}}>
            <Typography variant="h1" style={{width:"100%"}}>Your Dashboard</Typography>
            <Typography variant="h6">{currUser ? `Welcome ${currUser.email}` : "No user is logged in"}</Typography>
            <Box style={{display:"flex", justifyContent:"center", width:"100%"}}>
                {loading ? <h1>Loading</h1> : <ul>{blowComponents}</ul>}
            </Box>
        </Container>
    )

}

export default DashboardContent