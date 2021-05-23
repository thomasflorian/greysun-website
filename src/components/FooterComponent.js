import './FooterComponent.css'
import React from "react"
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function FooterComponent(props) {
    return (
        <footer>
            <IconButton href="https://www.instagram.com/greysuntech/" target="_blank">
                <InstagramIcon className="icon" color="primary" fontSize="large"/>
            </IconButton>
            <IconButton href="https://www.linkedin.com/company/greysun-technologies-llc/about/" target="_blank">
                <LinkedInIcon className="icon" color="primary" fontSize="large"/>
            </IconButton>
        </footer>
    )
}


export default FooterComponent