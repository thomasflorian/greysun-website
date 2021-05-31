import React, { useState, useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { NavLink, useHistory } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Box from '@material-ui/core/Box'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ProfileMenuComponent from './ProfileMenuComponent'
import { styled } from '@material-ui/core'

const activeStyles = {
  color: "var(--primary)"
}

const drawerStyles = {
  "& .MuiPaper-root": {
    color: "var(--light)",
    background: "var(--secondary)",
    width: "15rem",
    paddingTop: "4rem"
  }
}

const StyledSwipeableDrawer = styled(SwipeableDrawer)(drawerStyles)

const links = [
  { label: "GreyBand", to: "/", requireAuth: false },
  { label: "Our Story", to: "/story", requireAuth: false },
  { label: "Contact", to: "/contact", requireAuth: false },
  { label: "Store", to: "/store", requireAuth: false },
  { label: "Dashboard", to: "/dashboard", requireAuth: true }]

function NavComponent(props) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null)
  const history = useHistory()
  const { currUser } = useAuth()

  const handleProfileOpen = () => {
    setIsProfileOpen(true)
  }

  const handleProfileClose = () => {
    setIsProfileOpen(false)
  }

  const toolbarComponents = links.filter(link => link.requireAuth === false || currUser).map((link, i) => (
    <Link key={i} underline="none" color="inherit" activeStyle={activeStyles} exact component={NavLink} to={link.to} style={{ display: "flex" }}><MenuItem>{link.label}</MenuItem></Link>
  ))

  const drawerComponents = links.filter(link => link.requireAuth === false || currUser).map((link, i) => (
    <Link key={i} underline="none" color="inherit" activeStyle={activeStyles} exact component={NavLink} to={link.to} onClick={() => setIsMenuOpen(false)}><MenuItem style={{ fontSize: "x-large", padding: "1rem" }}>{link.label}</MenuItem></Link>
  ))

  return (
    <>
      <ProfileMenuComponent isProfileOpen={isProfileOpen} handleProfileClose={handleProfileClose} anchorEl={profileRef.current} />
      <AppBar position="fixed" color="secondary" style={{ height: "4rem" }} >
        <Toolbar>
          <Box style={props.isMobileView ? { textAlign: "center", flexGrow: "2", justifyContent: "center" } : { textAlign: "start", flexGrow: "1" }}>
          <img onClick={() => history.push("/")} style={{ height:"2.5rem", marginRight:"0.5rem", cursor: "pointer"}} src="./logo.png" alt="logo"/>
          </Box>
          <Box style={{ display: "flex", justifyContent: "flex-end" }}>
            {!props.isMobileView ? toolbarComponents :
              <IconButton edge="end" color="inherit" aria-label="menu" onClick={() => setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)}>
                {isMenuOpen ?
                  <CloseIcon fontSize="large" /> :
                  <MenuIcon fontSize="large" />}
              </IconButton>}
            <IconButton ref={profileRef} style={{ marginLeft: "2%" }} color={isProfileOpen ? "primary" : "inherit"} aria-label="login" onClick={handleProfileOpen}>
              <AccountCircleIcon fontSize="large" />
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


