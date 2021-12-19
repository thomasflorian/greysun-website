import React, { useEffect } from 'react'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Image from 'material-ui-image'

function StoryContent(props) {

    // Reset scroll on page load
    useEffect(() => { window.scrollTo(0, 0) }, [])

    return (
        <>
            <div className="jumbotron">
                <Typography className="normal" variant="h2" align="center">Our Story</Typography>
            </div>
            <Container style={{ maxWidth: props.isMobileView ? "75%" : "50%", marginTop: "2rem", marginBottom: "3rem" }}>
                <Typography className="normal" variant="h6" align="center" paragraph>In memory of Greyson Evan Spector</Typography>
                <Typography variant="body2" align="center">After the death of CEO Cade Spector’s older brother, Cade co-founded GreySun Technologies alongside best friend Jack Mulcrone to immortalize Grey’s legacy and further his message of being proactive to achieve self-improvement. If you’re interested in learning more about Grey’s story, his teachings, and how we plan to carry out his vision of a better world, stay tuned.</Typography>
            </Container>
            <Box style={{ background: "var(--secondary)", paddingTop: "2rem" }}>
                <Container style={{ paddingBottom: "5rem" }}>
                    <Typography className="light" variant="h4" align="center" gutterBottom paragraph>Our Founders</Typography>
                    <Grid container spacing={6} justify="center">
                        <Grid item xs={12} md={6} lg={4} align="center">
                            <Image src="./cade.png" color="transparent" style={{ width: props.isMobileView ? "200px" : "300px", height: props.isMobileView ? "200px" : "300px", paddingTop: "0px", margin: "1rem" }} imageStyle={{ borderRadius: "50px" }} />
                            <Typography variant="h4" paragraph>
                                <span className="light">Cade Spector</span>
                                <span className="bold primary-color"> CEO</span>
                            </Typography>
                            <Container>
                                <Typography variant="caption">
                                    Cade Spector is Co-Founder and CEO of GreySun Technologies. He works to maintain cohesion between his values, his team, and his products to create a better world imagined by his late brother Grey. Cade is an experienced Co-Founder of a tax-exempt non-profit, suburban apiary initiative, and inventor of three patented technologies with a demonstrated history in competitive debate – stemming from his relationship with his three brothers – and technology communication. He is pursuing a degree in Philosophy at Duke University and plans on attending medical school in his future.
                                </Typography>
                            </Container>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} align="center">
                            <Image src="./jack.png" color="transparent" style={{ width: props.isMobileView ? "200px" : "300px", height: props.isMobileView ? "200px" : "300px", paddingTop: "0px", margin: "1rem" }} imageStyle={{ borderRadius: "50px" }} />
                            <Typography variant="h4" paragraph>
                                <span className="light">Jack Mulcrone</span>
                                <span className="bold primary-color"> COO</span>
                            </Typography>
                            <Container>
                                <Typography variant="caption">
                                    <span>Jack Mulcrone is Co-Founder and COO of GreySun Technologies.  He is responsible for overseeing and facilitating the daily operations of the company, as well as providing direct support to all employees and staff. Previously, Jack designed the Vernon Hills Energy Farm: a high school landmark with 15 wind turbines and an energy education classroom complete with a solar panel array, rain water harvesting system, and geothermal heating pads. He is pursuing a degree from Duke University with a major in Philosophy, a minor in Chemistry, and a certificate in Philosophy, Politics, and Economics.</span>
                                </Typography>
                            </Container>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4} align="center">
                            <Image src="./colin.png" color="transparent" style={{ width: props.isMobileView ? "200px" : "300px", height: props.isMobileView ? "200px" : "300px", paddingTop: "0px", margin: "1rem" }} imageStyle={{ borderRadius: "50px" }} />
                            <Typography variant="h4" paragraph>
                                <span className="light">Colin Bernstein</span>
                                <span className="bold primary-color"> CTO</span>
                            </Typography>
                            <Container>
                                <Typography variant="caption">
                                    <span>Colin Bernstein is Co-Founder and CTO of GreySun Technologies. He directs the technical development of the products produced by GreySun and is personally designing the schematics, PCB, and firmware for these products. Previously, Colin gained hands-on experience with electronics design through industry internships and hobbyist projects. He is pursuing degrees in Electrical and Computer Engineering at Duke University.</span>
                                </Typography>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default StoryContent