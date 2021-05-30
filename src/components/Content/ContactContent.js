import React, { useEffect, useState } from 'react'
import { StyledTextField } from '../StyledTextField'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

const blankForm = { firstname: "", lastname: "", email: "", comments: "" }
const initialErrors = { firstname: false, lastname: false, email: false, comments: false }

function ContactContent(props) {

    // Reset scroll on page load
    useEffect(() => { window.scrollTo(0, 0) }, [])
    const [formValues, setFormValues] = useState(blankForm)
    const [formErrors, setFormErrors] = useState(initialErrors)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormErrors(prevFormErrors => ({ ...prevFormErrors, [name]: false }))
        setFormValues(prevFormValues => ({ ...prevFormValues, [name]: value }))
    }

    const handleSubmit = () => {
        const emptyFields = Object.entries(formValues).filter(entry => entry[1] === "")
        if (emptyFields.length === 0) {
            setFormValues(blankForm)
        } else {
            emptyFields.forEach(entry => setFormErrors(prevFormErrors => ({ ...prevFormErrors, [entry[0]]: true })))
        }
    }

    return (
        <>
            <div className="jumbotron">
                <Typography className="normal" variant="h2" align="justify">Contact Us</Typography>
            </div>
            <div style={{ background: "var(--secondary)", paddingTop: "2rem" }}>
                <Box p={5}>
                    <Grid container spacing={4} justify="center">
                        <Grid item xs={12} md={5} align="center">
                            <Box boxShadow={3} style={{ maxWidth: "400px", background: "var(--secondary-light)", paddingTop: "2rem", paddingBottom: "2rem", paddingLeft: "0.5rem", paddingRight: "0.5rem", borderRadius: "0.5rem" }}>
                                <Typography variant="h4" paragraph>
                                    <span className="light">Send us a message!</span>
                                </Typography>
                                <Typography variant="caption" paragraph>
                                    <span>Fill out the email form or give us a call to get in touch.</span>
                                </Typography>
                                <Container style={{ display: "flex", flexGrow: "1", alignItems: "center", marginBottom: "1rem" }}>
                                    <PhoneOutlinedIcon color="primary" style={{ marginLeft: "5%", marginRight: "5%" }} fontSize="large" />
                                    <Typography variant="body1" align="left">(919) 757-5218 </Typography>
                                </Container>
                                <Container style={{ display: "flex", flexGrow: "1", alignItems: "center", marginBottom: "1rem" }}>
                                    <MailOutlineIcon color="primary" style={{ marginLeft: "5%", marginRight: "5%" }} fontSize="large" />
                                    <Typography variant="body1" align="left">contact<wbr />greysun<wbr />@gmail<wbr />.com </Typography>
                                </Container>
                                <Container style={{ display: "flex", flexGrow: "1", alignItems: "center" }}>
                                    <RoomOutlinedIcon color="primary" style={{ marginLeft: "5%", marginRight: "5%" }} fontSize="large" />
                                    <Typography variant="body1" align="left">5333 Bent Leaf Drive,<wbr /> Raleigh, North Carolina 27606 </Typography>
                                </Container>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7} align="center">
                            <Box boxShadow={3} style={{ background: "var(--secondary-light)", paddingTop: "2rem", paddingBottom: "2rem", borderRadius: "0.5rem" }}>
                                <form>
                                    <Box>
                                        <StyledTextField style={{width: "35%"}} error={formErrors.firstname} type="text" name="firstname" label="First Name" variant="filled" value={formValues.firstname} onChange={handleChange} />
                                        <StyledTextField style={{width: "35%"}} error={formErrors.lastname} type="text" name="lastname" label="Last Name" variant="filled" value={formValues.lastname} onChange={handleChange} />
                                    </Box>
                                    <Box>
                                        <StyledTextField style={{ width: "73%" }} error={formErrors.email} type="email" name="email" label="Email Address" variant="filled" value={formValues.email} onChange={handleChange} />
                                    </Box>
                                    <Box>
                                        <StyledTextField style={{ width: "73%" }} error={formErrors.comments} type="text" rows={3} name="comments" label="Comment or Message" variant="filled" multiline value={formValues.comments} onChange={handleChange} />
                                    </Box>
                                    <Box style={{ width: "73%", display: "flex", marginTop: "1rem" }}>
                                        <Button variant="contained" size="large" color="primary" onClick={handleSubmit}>Submit</Button>
                                    </Box>
                                </form>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}

export default ContactContent