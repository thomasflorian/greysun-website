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
import { MenuItem } from '@material-ui/core'

const links = [
{label:"GreyBand", to:"/"},
{label:"Our Story", to:"/story"},
{label:"Contact", to:"/contact"}]

function NavComponent(props) {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toolbarComponents = links.map((link,i) => (
    <Link key={i} underline="none" color="inherit" activeClassName="active" exact component={NavLink} to={link.to}><MenuItem>{link.label}</MenuItem></Link>
  ))

  const drawerComponents = links.map((link,i) => (
    <Link key={i} underline="none" color="inherit" activeClassName="active" exact component={NavLink} to={link.to} onClick={() => setIsMenuOpen(false)}><MenuItem className="mobileLinks">{link.label}</MenuItem></Link>
  ))

  return (
    <>
    <AppBar position="fixed" color="secondary" >
      <Toolbar className="toolbar">
        <Typography style={props.isMobileView ? {textAlign:"center", flexGrow:"2"} : {textAlign:"start", flexGrow:"1"}} variant="h4">
          GreySun
        </Typography>
        <div className="elements">
          { !props.isMobileView ? toolbarComponents : 
            <IconButton className="iconbutton" edge="end" color="inherit" aria-label="menu" onClick={() => setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)}>
              { isMenuOpen ? 
              <CloseIcon /> :
              <MenuIcon />}
            </IconButton> }
          </div>
      </Toolbar>
    </AppBar>
    <SwipeableDrawer classes={{paper: "mobileDrawer"}} open={isMenuOpen} onClose={() => setIsMenuOpen(false)} onOpen={() => setIsMenuOpen(true)}>
      {drawerComponents}
    </SwipeableDrawer>
    </>
  )
}


export default NavComponent