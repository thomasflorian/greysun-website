import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Box from '@material-ui/core/Box'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LoginModalComponent from './LoginModalComponent'
import { styled } from '@material-ui/core'

const activeStyles = {
  color: "var(--primary)"
}

const drawerStyles = {
  "& .MuiPaper-root": {
    color: "var(--light)",
    background: "var(--secondary)",
    width: "15rem",
    paddingTop: "55px"
  }
}

const StyledSwipeableDrawer = styled(SwipeableDrawer)(drawerStyles)

const links = [
  { label: "GreyBand", to: "/", requireAuth: false },
  { label: "Our Story", to: "/story", requireAuth: false },
  { label: "Contact", to: "/contact", requireAuth: false },
  { label: "Dashboard", to: "/dashboard", requireAuth: true }]

function NavComponent(props) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currUser } = useAuth()

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const toolbarComponents = links.filter(link => link.requireAuth === false || currUser).map((link, i) => (
    <Link key={i} underline="none" color="inherit" activeStyle={activeStyles} exact component={NavLink} to={link.to} style={{ display: "flex" }}><MenuItem>{link.label}</MenuItem></Link>
  ))

  const drawerComponents = links.filter(link => link.requireAuth === false || currUser).map((link, i) => (
    <Link key={i} underline="none" color="inherit" activeStyle={activeStyles} exact component={NavLink} to={link.to} onClick={() => setIsMenuOpen(false)}><MenuItem style={{fontSize: "x-large", padding: "1rem"}}>{link.label}</MenuItem></Link>
  ))

  return (
    <>
      <LoginModalComponent isMobileView={props.isMobileView} open={isModalOpen} handleOpen={handleModalOpen} handleClose={handleModalClose} />
      <AppBar position="fixed" color="secondary" >
        <Toolbar>
          <Typography style={props.isMobileView ? { textAlign: "center", flexGrow: "2" } : { textAlign: "start", flexGrow: "1" }} variant="h4">
            GreySun
        </Typography>
          <Box style={{ display: "flex", justifyContent: "flex-end" }}>
            {!props.isMobileView ? toolbarComponents :
              <IconButton edge="end" color="inherit" aria-label="menu" onClick={() => setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)}>
                {isMenuOpen ?
                  <CloseIcon fontSize="large" /> :
                  <MenuIcon fontSize="large" />}
              </IconButton>}
            <IconButton style={{ marginLeft: "8%" }} color="inherit" aria-label="login" onClick={handleModalOpen}>
              <AccountCircleIcon fontSize="large" color={isModalOpen ? "primary" : "inherit"} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <StyledSwipeableDrawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)} onOpen={() => setIsMenuOpen(true)}>
        {drawerComponents}
      </StyledSwipeableDrawer>
    </>
  )
}


export default NavComponent