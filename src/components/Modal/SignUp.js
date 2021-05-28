import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Chip from '@material-ui/core/Chip'

const blankForm = { email: "", password: "", confirm: "" }

function SignUp({ StyledTextField, ...props }) {

    const [formValues, setFormValues] = useState(blankForm)
    const [errorState, setErrorState] = useState(false)
    const history = useHistory()
    const { signup } = useAuth()

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues(prevFormValues => ({ ...prevFormValues, [name]: value }))
    }

    async function handleSubmit() {
        if (formValues.email === "" || formValues.password === "" || formValues.confirm === "") {
            return setErrorState("Email and password are requred!")
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
            await signup(formValues.email, formValues.password)
            setErrorState(false)
            setFormValues(blankForm)
            props.handleClose()
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
        <>
            <Typography className="light" variant="h5" gutterBottom>Create GreySun Account</Typography>
            <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                {errorState && <Chip size="small" style={{ color: "var(--light)", background: "#eb4034", width: props.isMobileView ? "80%" : "65%", fontSize: props.isMobileView ? "0.6rem" : "0.8rem" }} label={errorState} />}
            </Box>
            <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <StyledTextField error={errorState !== false} type="text" name="email" label="Email" variant="filled" value={formValues.email} onChange={handleChange} />
            </Box>
            <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <StyledTextField error={errorState !== false} type="password" name="password" label="Password" variant="filled" value={formValues.password} onChange={handleChange} />
            </Box>
            <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <StyledTextField error={errorState !== false} type="password" name="confirm" label="Confirm Password" variant="filled" value={formValues.confirm} onChange={handleChange} />
            </Box>
            <Box style={{ width: props.isMobileView ? "80%" : "65%", display: "flex", marginTop: "1rem", alignItems: "center" }}>
                <Button style={{ minWidth: "80px" }} size="large" variant="contained" color="primary" onClick={handleSubmit}>Sign Up</Button>
                <Typography onClick={props.toggleState} style={{ paddingLeft: "0.5rem", marginRight: "auto", marginLeft: "auto", textAlign: "center", textDecoration: "underline", cursor: "pointer", color:"var(--light)" }} variant="caption">{props.isMobileView ? "Existing account?" : "Already have an account? Log in!"}</Typography>
            </Box>
        </>
    )
}

export default SignUp