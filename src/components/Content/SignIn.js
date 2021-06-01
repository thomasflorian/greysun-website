import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

import { StyledTextField } from '../StyledTextField'
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Chip from '@material-ui/core/Chip'
import Grid from "@material-ui/core/Grid"


const blankForm = { email: "", password: "" }

function SignIn(props) {

    const [formValues, setFormValues] = useState(blankForm)
    const [errorState, setErrorState] = useState("")
    const history = useHistory()
    const { signin } = useAuth()

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues(prevFormValues => ({ ...prevFormValues, [name]: value }))
    }

    async function handleSubmit() {
        if (formValues.email === "" || formValues.password === "" || formValues.confirm === "") {
            return setErrorState("Email and password are requred!")
        }
        try {
            await signin(formValues.email, formValues.password)
            setErrorState(false)
            setFormValues(blankForm)
            history.push("/dashboard")
        } catch (error) {
            setFormValues(prevFormValues => ({ ...prevFormValues, password: "" }))
            if (error.code === "auth/wrong-password") {
                return setErrorState("Incorrect username or password!")
            }
            if (error.code === "auth/invalid-email") {
                return setErrorState("Invalid email address!")
            }
            setErrorState("Failed to login!")
        }
    }

    return (
        <form onSubmit={(e) => {e.preventDefault(); handleSubmit()}}>
            <Grid container>
                <Grid item md={5} style={{background:"var(--primary)", display: props.isMobileView ? "none":"block"}}>

                </Grid>
                <Grid item xs={12} md={7} style={{background:"var(--secondary-light)", padding: props.isMobileView ? "12.6rem 1rem":"12.6rem 4rem", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                    <Typography className="light" variant="h5" gutterBottom>Log into GreySun Account</Typography>
                    <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        {errorState && <Chip size="small" style={{ color: "var(--light)", background: "#eb4034", width: props.isMobileView ? "80%" : "65%", fontSize: props.isMobileView ? "0.6rem" : "0.8rem" }} label={errorState} />}
                    </Box>
                    <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <StyledTextField style={{width: props.isMobileView ? "80%" : "65%"}} error={errorState !== ""} type="text" name="email" label="Email" variant="filled" value={formValues.email} onChange={handleChange} />
                    </Box>
                    <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <StyledTextField style={{width: props.isMobileView ? "80%" : "65%"}} error={errorState !== ""} type="password" name="password" label="Password" variant="filled" value={formValues.password} onChange={handleChange} />
                    </Box>
                    <Box style={{ width: props.isMobileView ? "80%" : "65%", display: "flex", alignItems: "center", padding: "0" }}>
                        <Typography onClick={() => history.push("/resetpassword")} variant="caption" style={{color:"var(--light)", fontSize: "0.7rem", cursor: "pointer"}}>Forgot Password?</Typography>
                    </Box>
                    <Box style={{ width: props.isMobileView ? "80%" : "65%", display: "flex", marginTop: "0.5rem", alignItems: "center" }}>
                        <Button type="submit" style={{ minWidth: "80px" }} size="large" variant="contained" color="primary">Sign In</Button>
                        <Typography onClick={() => history.push("/signup")} style={{ paddingLeft: "0.5rem", marginRight: "auto", marginLeft: "auto", textAlign: "center", textDecoration: "underline", cursor: "pointer", color: "var(--light)"}} variant="caption">{props.isMobileView ? "Create an account!" : "No GreySun account? Sign Up!"}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </form>

    )
}

export default SignIn