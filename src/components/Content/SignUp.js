import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

import {StyledTextField} from '../StyledTextField'
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Chip from '@material-ui/core/Chip'
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel, Grid, makeStyles } from "@material-ui/core"


const blankForm = { firstname: "", lastname: "", email: "", password: "", confirm: "", age: false, terms: false }

function SignUp(props) {

    const classes = useStyles()

    const [formValues, setFormValues] = useState(blankForm)
    const [errorState, setErrorState] = useState("")
    const history = useHistory()
    const { signup } = useAuth()

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        if (type === "checkbox") {
            setFormValues(prevFormValues => ({ ...prevFormValues, [name]: checked }))
        } else {
            setFormValues(prevFormValues => ({ ...prevFormValues, [name]: value }))
        }
    }

    async function handleSubmit() {
        if (formValues.firstname === "" || formValues.lastname === "" || formValues.email === "" || formValues.password === "" || formValues.confirm === "" ) {
            return setErrorState("All input fields are requred!")
        }
        if (!formValues.age) {
            return setErrorState("You must be 21 years of age to register!")
        }
        if (!formValues.terms) {
            return setErrorState("The terms and conditions must be accepted!")
        }
        if (formValues.password !== formValues.confirm) {
            setFormValues(prevFormValues => ({ ...prevFormValues, password: "", confirm: "" }))
            return setErrorState("Passwords do not match!")
        }
        if (formValues.password.length < 6) {
            setFormValues(prevFormValues => ({ ...prevFormValues, password: "", confirm: "" }))
            return setErrorState("Passwords must have at least 6 characters!")
        }
        try {
            await signup(formValues.firstname, formValues.lastname, formValues.email, formValues.password)
            setErrorState(false)
            setFormValues(blankForm)
            history.push("/dashboard")

        } catch (error) {
            if (error.code === "auth/invalid-email") {
                return setErrorState("Invalid email address!")
            }
            if (error.code === "auth/email-already-in-use") {
                return setErrorState("Account with this email already exists!")
            }
            return setErrorState("Failed to create account!")
        }
    }

    return (
        <form onSubmit={(e) => {e.preventDefault(); handleSubmit()}}>
            <Grid container >
                <Grid item md={5} style={{background:"var(--primary)", display: props.isMobileView ? "none":"block"}}>

                </Grid>
                <Grid item xs={12} md={7} style={{background:"var(--secondary-light)", padding: props.isMobileView ? "5.1rem 1rem":"5.1rem 2rem", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                    <Typography className="light" variant="h5" gutterBottom>Create GreySun Account</Typography>
                    <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        {errorState && <Chip size="small" style={{ color: "var(--light)", background: "#eb4034", width: props.isMobileView ? "80%" : "65%", fontSize: props.isMobileView ? "0.6rem" : "0.8rem" }} label={errorState} />}
                    </Box>
                    <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <StyledTextField style={{width: props.isMobileView ? "38.5%" : "31%"}} error={errorState !== ""} type="text" name="firstname" label="First Name" variant="filled" value={formValues.firstname} onChange={handleChange} />
                        <StyledTextField style={{width: props.isMobileView ? "38.5%" : "31%"}} error={errorState !== ""} type="text" name="lastname" label="Last Name" variant="filled" value={formValues.lastname} onChange={handleChange} />
                    </Box>
                    <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <StyledTextField style={{width: props.isMobileView ? "80%" : "65%"}} error={errorState !== ""} type="text" name="email" label="Email" variant="filled" value={formValues.email} onChange={handleChange} />
                    </Box>
                    <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <StyledTextField style={{width: props.isMobileView ? "80%" : "65%"}} error={errorState !== ""} type="password" name="password" label="Password" variant="filled" value={formValues.password} onChange={handleChange} />
                    </Box>
                    <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <StyledTextField style={{width: props.isMobileView ? "80%" : "65%"}} error={errorState !== ""} type="password" name="confirm" label="Confirm Password" variant="filled" value={formValues.confirm} onChange={handleChange} />
                    </Box>
                    <Box style={{ width: "100%", display: "flex", flexWrap:"wrap", justifyContent: "center" }}>
                        <FormControlLabel style={{width: props.isMobileView ? "80%" : "65%"}} classes={{label: props.isMobileView ? classes.checkmarkLabelMobile: classes.checkmarkLabel}}
                            control={<Checkbox name="age" style={{color:"var(--primary)"}} onChange={handleChange} checked={formValues.age} />}
                            label="I am over 21 years of age."
                        />
                        <FormControlLabel style={{width: props.isMobileView ? "80%" : "65%"}} classes={{label: props.isMobileView ? classes.checkmarkLabelMobile: classes.checkmarkLabel}}
                            control={<Checkbox name="terms" style={{color:"var(--primary)"}} onChange={handleChange} checked={formValues.terms} />}
                            label="I agree to the terms and conditions."
                        />
                    </Box>
                    <Box style={{ width: props.isMobileView ? "80%" : "65%", display: "flex", marginTop: "1rem", alignItems: "center" }}>
                        <Button type="submit" style={{ minWidth: "80px" }} size="large" variant="contained" color="primary">Sign Up</Button>
                        <Typography onClick={() => history.push("/signin")} style={{ paddingLeft: "0.5rem", marginRight: "auto", marginLeft: "auto", textAlign: "center", textDecoration: "underline", cursor: "pointer", color:"var(--light)" }} variant="caption">{props.isMobileView ? "Existing account?" : "Already have an account? Log in!"}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </form>
    )
}

const useStyles = makeStyles({

    checkmarkLabel:{
        fontSize:"1rem"
    },
    checkmarkLabelMobile:{
        fontSize:"0.7rem"
    }

})


export default SignUp