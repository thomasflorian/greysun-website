import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import { useAuth } from '../../contexts/AuthContext'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core/styles';

let textStyles = {
    margin: "1.5%",
    background: "var(--light)",
    width: "65%",
    '& label.Mui-focused': {
        color: 'var(--secondary)',
    },
    '& label': {
        fontSize: '1rem'
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

const StyledTextField = styled(TextField)(textStyles)

const today = new Date()
const dd = String(today.getDate()).padStart(2, '0')
const mm = String(today.getMonth() + 1).padStart(2, '0')
const yyyy = today.getFullYear()
const hr = today.getHours()
const min = String(today.getMinutes()).padStart(2, '0')
const blankForm = { bac: "", date: `${yyyy}-${mm}-${dd}`, time: `${hr}:${min}` }

const firestore = firebase.firestore()

function DevContent(props) {

    const [formValues, setFormValues] = useState(blankForm)
    const { currUser } = useAuth()

    // Reset scroll on page load
    useEffect(() => { window.scrollTo(0, 0) }, [])

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues(prevFormValues => ({ ...prevFormValues, [name]: value }))
    }

    async function handleSubmit() {
        if (formValues.bac === "" || formValues.date === "" || formValues.time === "") {
            return alert("Invalid Input")
        }
        const blow = { bac: formValues.bac, timestamp: firebase.firestore.Timestamp.fromDate(new Date(formValues.date + "T" + formValues.time)) }
        console.log(blow)
        firestore.collection('users').doc(currUser.uid).get().then(async item => {
            const blows = item.data().blows
            blows.push(blow)
            await firestore.collection('users').doc(currUser.uid).update({ blows })
            setFormValues(blankForm)
            alert("success")
        })
    }

    return (
        <Container style={{ height: "650px", display: "flex", flexWrap: "wrap", justifyContent: "center", textAlign: "center", alignContent: "start" }}>
            <Typography variant="h2" style={{ width: "100%" }}>GreyBand Development Tool</Typography>
            <Box style={{ display: "flex", flexWrap: "wrap", background: "var(--secondary-light)", height: "60%", width: props.isMobileView ? "90%" : "60%", maxWidth: "500px", marginTop: "3rem", borderRadius: "1rem", alignContent: "center" }}>
                <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <StyledTextField type="number" name="bac" label="BAC" variant="filled" value={formValues.bac} onChange={handleChange} />
                </Box>
                <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <StyledTextField type="date" name="date" label="Date" variant="filled" InputLabelProps={{ shrink: true }} value={formValues.date} onChange={handleChange} />
                </Box>
                <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <StyledTextField type="time" name="time" label="Time" variant="filled" InputLabelProps={{ shrink: true }} value={formValues.time} onChange={handleChange} />
                </Box>
                <Box style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                    <Button style={{ minWidth: "80px" }} size="large" variant="contained" color="primary" onClick={handleSubmit}>Blow</Button>
                </Box>
            </Box>
        </Container>
    )
}

export default DevContent