import React from "react"
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const footerStyle = {
    background: "var(--secondary)",
    display: "flex",
    justifyContent: "center",
    textAlign: "center"
}

function FooterComponent(props) {
    return (
        <footer style={{ ...footerStyle }}>
            <IconButton href="https://www.instagram.com/greysuntech/" target="_blank">
                <InstagramIcon color="primary" fontSize="large" />
            </IconButton>
            <IconButton href="https://www.linkedin.com/company/greysun-technologies-llc/about/" target="_blank">
                <LinkedInIcon color="primary" fontSize="large" />
            </IconButton>
        </footer>
    )
}


export default FooterComponent