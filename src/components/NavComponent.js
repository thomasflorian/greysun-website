import './NavComponent.css'
import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { Box, MenuItem } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LoginModalComponent from './LoginModalComponent'

const links = [
{label:"GreyBand", to:"/"},
{label:"Our Story", to:"/story"},
{label:"Contact", to:"/contact"}]

function NavComponent(props) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const toolbarComponents = links.map((link,i) => (
    <Link key={i} underline="none" color="inherit" activeClassName="active" exact component={NavLink} to={link.to} style={{display:"flex"}}><MenuItem>{link.label}</MenuItem></Link>
  ))

  const drawerComponents = links.map((link,i) => (
    <Link key={i} underline="none" color="inherit" activeClassName="active" exact component={NavLink} to={link.to} onClick={() => setIsMenuOpen(false)}><MenuItem className="mobileLinks">{link.label}</MenuItem></Link>
  ))

  return (
    <>
    <LoginModalComponent isMobileView={props.isMobileView} open={isModalOpen} handleOpen={handleModalOpen} handleClose={handleModalClose}/>
    <AppBar position="fixed" color="secondary" >
      <Toolbar className="toolbar">
        <Typography style={props.isMobileView ? {textAlign:"center", flexGrow:"2"} : {textAlign:"start", flexGrow:"1"}} variant="h4">
          GreySun
        </Typography>
        <Box className="elements">
          { !props.isMobileView ? toolbarComponents : 
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={() => setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)}>
              { isMenuOpen ? 
              <CloseIcon fontSize="large" /> :
              <MenuIcon fontSize="large" />}
            </IconButton> }
            <IconButton style={{marginLeft:"8%"}} color="inherit" aria-label="login" onClick={handleModalOpen}>
            <AccountCircleIcon fontSize="large" color={isModalOpen ? "primary":"inherit"} />
            </IconButton>
          </Box>
      </Toolbar>
    </AppBar>
    <SwipeableDrawer classes={{paper: "mobileDrawer"}} open={isMenuOpen} onClose={() => setIsMenuOpen(false)} onOpen={() => setIsMenuOpen(true)}>
      {drawerComponents}
    </SwipeableDrawer>
    </>
  )
}


export default NavComponent