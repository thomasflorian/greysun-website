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
    const blowComponents = blows.reverse().map((blow, i) => (<Box style={{display:"flex", justifyContent:"center", width:"100%"}} key={i}><div style={{ background: i === 0 ? "var(--primary":"var(--secondary-light", width:"20rem", padding: i===0 ? "0.8rem":"0.5rem", margin:"0.2rem", borderRadius:"1rem"}}><Typography variant={i === 0 ? "body2":"caption"} >{`BAC was ${blow.bac} at ${(blow.timestamp.toDate().getHours() + 11) % 12 + 1}:${String(blow.timestamp.toDate().getMinutes()).padStart(2, '0')} ${blow.timestamp.toDate().getHours() >= 12 ? "PM":"AM" } on ${blow.timestamp.toDate().toDateString()}`}</Typography></div></Box>))

    return (
        <Container style={{height:"600px", display:"flex", flexWrap:"wrap", justifyContent:"center", textAlign:"center", alignContent:"start"}}>
            <Typography variant="h1" style={{width:"100%"}}>Your Dashboard</Typography>
            <Typography variant="h6">{currUser ? `Welcome ${currUser.email}` : "No user is logged in"}</Typography>
            <Box style={{display:"flex", flexWrap:"wrap", justifyContent:"center", width:"100%", marginTop:"2rem"}}>
                {loading ? <h1>Loading</h1> : blowComponents}
            </Box>
        </Container>
    )

}

export default DashboardContent