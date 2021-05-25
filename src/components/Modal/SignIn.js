import {StyledTextField} from '../LoginModalComponent'
import React from "react"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

function SignIn(props) {
    return (
        <>
        <Typography className="light" variant="h5" gutterBottom>Log into GreySun Account</Typography>
        <Box style={{width:"100%", display: "flex", justifyContent:"center"}}>
            <StyledTextField type="text" name="email" label="Email" variant="filled" />
        </Box>
        <Box style={{width:"100%", display: "flex", justifyContent:"center"}}>
            <StyledTextField type="password" name="password" label="Password" variant="filled" />
        </Box>
        <Box style={{width:"65%", display:"flex", marginTop:"1rem", alignItems:"center"}}>
            <Button style={{minWidth:"80px"}} size={props.isMobileView ? "small":"large"} variant="contained" color="primary" onClick={() => alert("Accounts not yet implemented")}>Sign In</Button>
            <Typography onClick={props.toggleState} style={{paddingLeft:"0.5rem", marginRight:"auto", marginLeft:"auto", textAlign:"center"}} variant="caption">{props.isMobileView? "Create an account!":"No GreySun account? Sign Up!"}</Typography>
        </Box>
        </>
    )
}

export default SignIn