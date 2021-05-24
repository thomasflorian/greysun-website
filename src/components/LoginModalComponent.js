import React from 'react';
import { styled } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const modalStyles = {
  '& #modal-div':{
    background:"var(--secondary-light)",
    display: "flex",
    flexWrap: "wrap",
    width:"80%",
    maxWidth:"500px",
    minWidth:"300px",
    height:"300px",
    alignContent: "center",
    justifyContent: "center",
    marginTop:"10%",
    marginRight:"auto",
    marginLeft:"auto",
    borderRadius:"0.25rem"
  },
  '& #modal-div:focus':{
    outline: "transparent"
  }
}
const LoginModal = styled(Modal)(modalStyles)

const textStyles = {
  margin: "1.5%",
  background: "var(--light)",
  width:"65%",
  '& label.Mui-focused': {
      color: 'var(--secondary)',
  },
  '& label': {
      fontSize: '0.8rem'
  },
  '& input': {
      color: 'var(--secondary',
  },
  '& .MuiOutlinedInput-root' : {
      '& fieldset':{
          borderColor: 'var(--secondary)'
      }
  }, 
  '& .MuiOutlinedInput-root:hover' : {
      '& fieldset':{
          borderColor: 'var(--secondary)'
      }
  },
  '& .MuiOutlinedInput-root.Mui-focused:hover' : {
      '& fieldset':{
          borderColor: 'var(--secondary)'
      }
  }
}
const StyledTextField = styled(TextField)(textStyles)

export default function LoginModalComponent(props) {

  return (
    <div>
      <LoginModal
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box boxShadow={3} id="modal-div">
            <Typography className="light" variant="h5" gutterBottom>GreySun Account</Typography>
            <Box style={{width:"100%", display: "flex", justifyContent:"center"}}>
              <StyledTextField type="text" name="email" label="Email" variant="filled" />
            </Box>
            <Box style={{width:"100%", display: "flex", justifyContent:"center"}}>
              <StyledTextField type="password" name="password" label="Password" variant="filled" />
            </Box>
            <Box style={{width:"65%", display:"flex", marginTop:"1rem"}}>
              <Button size="large" variant="contained" color="primary" onClick={() => alert("Accounts not yet implemented")}>Sign In</Button>
            </Box>
          </Box>
        </Fade>
      </LoginModal>
    </div>
  );
}