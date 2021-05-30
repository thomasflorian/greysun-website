import React from 'react';
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import { makeStyles, Menu, MenuItem } from '@material-ui/core';

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
        {!currUser && <MenuItem onClick={() => { history.push("/signup"); handleProfileClose() }}>Sign up</MenuItem>}
        {!currUser && <MenuItem onClick={() => { history.push("/signin"); handleProfileClose() }} >Log in</MenuItem>}
        {!currUser && <MenuItem onClick={handleSignout}>Sign out</MenuItem>}
    </Menu>
  );
}

const useStyles = makeStyles({
  menuPaper: {
    background: "var(--secondary-light)"
  },
  menuList: {
    color: "var(--light)"
  }
})