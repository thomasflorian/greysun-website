import { styled } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'


let textStyles = {
    margin: "1.5%",
    background: "var(--light)",
    width: "65%",
    '& label.Mui-focused': {
      color: 'var(--secondary)',
    },
    '& label': {
      fontSize: '0.8rem'
    },
    '& input': {
      color: 'var(--secondary',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'var(--secondary)'
      }
    },
    '& .MuiOutlinedInput-root:hover': {
      '& fieldset': {
        borderColor: 'var(--secondary)'
      }
    },
    '& .MuiOutlinedInput-root.Mui-focused:hover': {
      '& fieldset': {
        borderColor: 'var(--secondary)'
      }
    }
  }
  
export const StyledTextField = styled(TextField)(textStyles)