import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Chip from '@material-ui/core/Chip'

const blankForm = { email: "", password: "" }

function PasswordReset({ StyledTextField, ...props }) {

    const [formValues, setFormValues] = useState(blankForm)
    const [errorState, setErrorState] = useState(false)
    const { signin } = useAuth()
    const history = useHistory()

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
            props.handleClose()
            history.push("/dashboard")
        } catch (error) {
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
        <>
            <Typography className="light" variant="h5" gutterBottom>Log into GreySun Account</Typography>
            <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                {errorState && <Chip size="small" style={{ color: "var(--light)", background: "#eb4034", width: props.isMobileView ? "80%" : "65%", fontSize: props.isMobileView ? "0.6rem" : "0.8rem" }} label={errorState} />}
            </Box>
            <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <StyledTextField error={errorState !== false} type="text" name="email" label="Email" variant="filled" value={formValues.email} onChange={handleChange} />
            </Box>
            <Box style={{ width: props.isMobileView ? "80%" : "65%", display: "flex", marginTop: "0.5rem", alignItems: "center" }}>
                <Button style={{ minWidth: "80px" }} size="large" variant="contained" color="primary" onClick={handleSubmit}>Sign In</Button>
                <Typography onClick={props.toggleState} style={{ paddingLeft: "0.5rem", marginRight: "auto", marginLeft: "auto", textAlign: "center", textDecoration: "underline", cursor: "pointer"}} variant="caption">{props.isMobileView ? "Create an account!" : "No GreySun account? Sign Up!"}</Typography>
            </Box>
        </>
    )
}

export default PasswordReset