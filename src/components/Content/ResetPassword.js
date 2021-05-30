import React, { useState } from "react"
import {  useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

import {StyledTextField} from '../StyledTextField'
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Chip from '@material-ui/core/Chip'
import { Grid } from "@material-ui/core"


function ResetPassword(props) {

    const [email, setEmail] = useState("")
    const [errorState, setErrorState] = useState("")
    const [messageState, setMessageState] = useState("")
    const { resetpassword } = useAuth()
    const history = useHistory()

    const handleChange = (event) => {
        setEmail(event.target.value)
    }

    async function handleSubmit() {
        try {
            setErrorState("")
            setMessageState("")
            await resetpassword(email)
            setMessageState("Check your inbox for instructions!")
        } catch(error) {
            if (error.code === "auth/invalid-email") {
                return setErrorState("Invalid email address!")
            }
            setErrorState("Failed to reset password!")
        }


        
    }

    return (
        <form onSubmit={(e) => {e.preventDefault(); handleSubmit()}}>
            <Grid container>
                <Grid item md={5} style={{background:"var(--primary)", display: props.isMobileView ? "none":"block"}}>

                </Grid>
                <Grid item xs={12} md={7} style={{background:"var(--secondary-light)", padding: props.isMobileView ? "14.2rem 1rem":"14.2rem 4rem", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                    <Typography className="light" variant="h5" gutterBottom>Reset Password</Typography>
                    <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        {errorState && <Chip size="small" style={{ color: "var(--light)", background: "#eb4034", width: props.isMobileView ? "80%" : "65%", fontSize: props.isMobileView ? "0.6rem" : "0.8rem" }} label={errorState} />}
                        {messageState && <Chip size="small" style={{ color: "var(--light)", background: "var(--primary)", width: props.isMobileView ? "80%" : "65%", fontSize: props.isMobileView ? "0.6rem" : "0.8rem" }} label={messageState} />}
                    </Box>
                    <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <StyledTextField style={{width: props.isMobileView ? "80%" : "65%"}} error={errorState !== ""} type="text" name="email" label="Email" variant="filled" value={email} onChange={handleChange} />
                    </Box>
                    <Box style={{ width: props.isMobileView ? "80%" : "65%", display: "flex", marginTop: "0.5rem", alignItems: "center" }}>
                        <Button type="submit" style={{ minWidth: "80px" }} size="large" variant="contained" color="primary">Send Email</Button>
                        <Typography onClick={() => history.push("/signup")} style={{ paddingLeft: "0.5rem", marginRight: "auto", marginLeft: "auto", textAlign: "center", textDecoration: "underline", cursor: "pointer", color: "var(--light)"}} variant="caption">{props.isMobileView ? "Create an account!" : "No GreySun account? Sign Up!"}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </form>

    )
}

export default ResetPassword