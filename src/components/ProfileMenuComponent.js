import React from 'react';
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles'

export default function ProfileMenuComponent({isProfileOpen, anchorEl, handleProfileClose}) {

  const history = useHistory()
  const { currUser, signout } = useAuth()
  const classes = useStyles()

  async function handleSignout() {
    handleProfileClose()
    try {
      await signout()
    } catch (error) {
      alert("Server Error: Failed to logout")
    }
  }

  return (
    <Menu open={isProfileOpen} anchorEl={anchorEl} onClose={handleProfileClose} style={{ marginTop: "3rem" }} classes={{paper: classes.menuPaper, list: classes.menuList}}>
        {!currUser && <MenuItem style={{paddingLeft:"2rem", paddingRight:"2rem"}} onClick={() => { history.push("/signup"); handleProfileClose() }}>Sign up</MenuItem>}
        {!currUser && <MenuItem style={{paddingLeft:"2rem", paddingRight:"2rem"}} onClick={() => { history.push("/signin"); handleProfileClose() }} >Log in</MenuItem>}
        {currUser && <MenuItem style={{paddingLeft:"2rem", paddingRight:"2rem"}} onClick={handleSignout}>Sign out</MenuItem>}
    </Menu>
  );
}

const useStyles = makeStyles({
  menuPaper: {
    background: "var(--secondary-light)"
  },
  menuList: {
    color: "var(--light)",
  }
})