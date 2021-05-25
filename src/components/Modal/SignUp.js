import { Box, Button, Typography } from "@material-ui/core"
import {StyledTextField} from '../LoginModalComponent'
import React from "react"

function SignUp(props) {
    return (
        <>
        <Typography className="light" variant="h5" gutterBottom>Create GreySun Account</Typography>
        <Box style={{width:"100%", display: "flex", justifyContent:"center"}}>
            <StyledTextField type="text" name="email" label="Email" variant="filled" />
        </Box>
        <Box style={{width:"100%", display: "flex", justifyContent:"center"}}>
            <StyledTextField type="password" name="password" label="Password" variant="filled" />
        </Box>
        <Box style={{width:"100%", display: "flex", justifyContent:"center"}}>
            <StyledTextField type="password" name="confirm" label="Confirm Password" variant="filled" />
        </Box>
        <Box style={{width:"65%", display:"flex", marginTop:"1rem", alignItems:"center"}}>
            <Button style={{minWidth:"80px"}} size={props.isMobileView ? "small":"large"} variant="contained" color="primary" onClick={() => alert("Accounts not yet implemented")}>Sign Up</Button>
            <Typography onClick={props.toggleState} style={{paddingLeft:"0.5rem", marginRight:"auto", marginLeft:"auto", textAlign:"center"}} variant="caption">{props.isMobileView? "Existing account?":"Already have an account? Log in!"}</Typography>
        </Box>
        </>
    )
}

export default SignUp