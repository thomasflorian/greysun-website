import { Container, Typography } from '@material-ui/core'
import React from 'react'

function DashboardContent(props) {

    return (
        <Container style={{height:"800px", display:"flex", justifyContent:"center"}}>
            <Typography variant="h1">Your Dashboard</Typography>
        </Container>
    )

}

export default DashboardContent