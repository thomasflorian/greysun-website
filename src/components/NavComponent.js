import './NavComponent.css'
import React, { useState } from 'react'
import {NavLink, useRouteMatch} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
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

// <Typography><Link color="inherit" to="">GreyBand</Link></Typography>

function NavComponent(props) {

  const [isButtonHidden, setIsButtonHidden] = useState(window.innerWidth > 960)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  window.addEventListener('resize', () => {setIsButtonHidden(window.innerWidth > 960)})

  const linkComponents = links.map((link,i) => (
    <Link key={i} underline="none" color="inherit" activeClassName="active" exact component={NavLink} to={link.to}><MenuItem>{link.label}</MenuItem></Link>
  ))

  return (
    <>
    <AppBar position="fixed" color="secondary" >
      <Toolbar className="toolbar">
        <Typography variant="h6">
          Greysun
        </Typography>
        <div className="elements">
          { isButtonHidden ? linkComponents : 
            <IconButton className="iconbutton" edge="end" color="inherit" aria-label="menu">
              { isMenuOpen ? 
              <CloseIcon onClick={() => setIsMenuOpen(false)} /> :
              <MenuIcon onClick={() => setIsMenuOpen(true)}/> }
            </IconButton> }
          </div>
      </Toolbar>
    </AppBar>
    <SwipeableDrawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
      {linkComponents}
    </SwipeableDrawer>
    </>
  )
}


export default NavComponent