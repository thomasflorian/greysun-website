import React, {useState} from 'react';
import SignIn from './Modal/SignIn'
import SignUp from './Modal/SignUp'
import { styled } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'

const modalStyles = {
  '& #modal-div':{
    background:"var(--secondary-light)",
    display: "flex",
    flexWrap: "wrap",
    width:"80%",
    maxWidth:"500px",
    minWidth:"300px",
    alignContent: "center",
    justifyContent: "center",
    margin: "8rem auto 0 auto",
    borderRadius:"0.25rem",
    padding: "3rem 0.5rem"
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
export const StyledTextField = styled(TextField)(textStyles)

export default function LoginModalComponent(props) {

  const [isSigningIn, setIsSigningIn] = useState(true)

  const toggleState = () => {
    setIsSigningIn(prevState => !prevState)
  }

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
            {isSigningIn ? <SignIn toggleState={toggleState} isMobileView={props.isMobileView}/> : <SignUp toggleState={toggleState} isMobileView={props.isMobileView}/>}
          </Box>
        </Fade>
      </LoginModal>
    </div>
  );
}