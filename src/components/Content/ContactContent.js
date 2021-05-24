import './ContactContent.css'
import React, {useEffect} from 'react'
import {Container, Grid, Typography } from '@material-ui/core'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

function ContactContent(props) {

    // Reset scroll on page load
    useEffect(() => {window.scrollTo(0,0)}, [])

    return (
        <>
        <div className="jumbotron">
            <Typography className="normal" variant="h2" align="justify">Contact Us</Typography>
        </div>
        <div style={{background:"var(--secondary)", paddingTop:"2rem"}}>
            <Container style={{paddingBottom:"5rem"}}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4} align="center">
                        <Typography variant="h4" paragraph>
                            <span className="light">Send us a message!</span>
                        </Typography>
                        <Typography variant="caption" paragraph>
                            <span>Fill out the email form or give us a call to get in touch.</span>
                        </Typography>
                        <Container style={{display:"flex", flexGrow:"1", alignItems:"center", marginBottom:"1rem"}}>
                            <PhoneOutlinedIcon style={{marginLeft:"0.5rem", marginRight:"0.5rem"}} fontSize="large"/> 
                            <Typography variant="body2" align="center">919-757-5218 </Typography>
                        </Container>
                        <Container style={{display:"flex", flexGrow:"1", alignItems:"center", marginBottom:"1rem"}}>
                            <MailOutlineIcon style={{marginLeft:"0.5rem", marginRight:"0.5rem"}} fontSize="large"/> 
                            <Typography variant="body2" align="center">CONTACTGREYSUN@GMAIL.COM </Typography>
                        </Container>
                        <Container style={{display:"flex", flexGrow:"1", alignItems:"center"}}>
                            <RoomOutlinedIcon style={{marginLeft:"0.5rem", marginRight:"0.5rem"}} fontSize="large"/> 
                            <Typography variant="body2" align="center">5333 Bent Leaf Dr. RALEIGH, NC 27606 </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={8} align="center">
                        
                    </Grid>
                </Grid>
            </Container>
        </div>
        </>
    )
}

export default ContactContent