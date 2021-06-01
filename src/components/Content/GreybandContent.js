import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Image from 'material-ui-image'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Fade } from '@material-ui/core'

function GreybandContent(props) {

    const [mobileSrc, setMobileSrc] = useState("./greysingle.png")
    
    const history = useHistory()
    // Reset scroll on page load
    useEffect(() => { window.scrollTo(0, 0) }, [])
    useEffect(() => { 
        const interval = setInterval(() => {
            setMobileSrc(prevMobileSrc => {
                if (prevMobileSrc === "./greysingle.png")
                    return "./whitesingle.png"
                if (prevMobileSrc === "./whitesingle.png")
                    return "./blacksingle.png"
                else
                    return "./greysingle.png"
            })
        }, 6000)
        return () => clearInterval(interval)
    }, [])
    


    return (
        <>
            {props.isMobileView ?
                <div style={{position:"relative"}}>
                <Fade in={mobileSrc === "./greysingle.png"} timeout={1000}><Image src="./greysingle.png" color="transparent" aspectRatio={1457/1582} style={{ margin: "0" }} /></Fade>
                <Fade in={mobileSrc === "./whitesingle.png"} timeout={1000}><Image src="./whitesingle.png" color="transparent" aspectRatio={1457/1582} style={{ margin: "0", position: "absolute", top:"0px", left:"0px", width:"100%" }} /></Fade>
                <Fade in={mobileSrc === "./blacksingle.png"} timeout={1000}><Image src="./blacksingle.png" color="transparent" aspectRatio={1457/1582} style={{ margin: "0", position: "absolute", top:"0px", left:"0px", width:"100%"  }} /></Fade> 
                </div> :
                <Image src="./lineup.png" color="transparent" aspectRatio={4728 / 1817} />}
            <Typography variant={props.isMobileView ? "h2" : "h1"} align="center" noWrap paragraph>Grey<wbr />Band</Typography>
            <Typography variant="h6" align="center">Something Great is on the Horizon</Typography>
            <div id="space"></div>
            <div className="card">
                <Grid container spacing={props.isMobileView ? 2 : 10} justify="center" alignItems="center">
                    <Grid item xs={12} md={4} align={props.isMobileView ? "center" : undefined}>
                        <Typography className="bold" variant="h6">In memory of Greyson Evan Spector</Typography>
                        <Typography variant="body2" align="left">After the death of CEO Cade Spector’s older brother, Cade co-founded GreySun Technologies alongside best friend Jack Mulcrone to immortalize Grey’s legacy and further his message of being proactive to achieve self-improvement. If you’re interested in learning more about Grey’s story, his teachings, and how we plan to carry out his vision of a better world, click below.</Typography>
                        <Button style={{ marginTop: "1rem" }} variant="contained" size="large" color="primary" onClick={() => history.push("story")}>Our Story</Button>
                    </Grid>
                    <Grid item xs={8} md={4}>
                        <Image src="./greyson.png" color="transparent" imageStyle={{ borderRadius: "50px" }} />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default GreybandContent