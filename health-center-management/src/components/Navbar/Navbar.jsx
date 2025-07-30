import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './Navbar.css'

function Navbar({userInfo}) {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar className='toolbar'>
        <Avatar 
          className='logo-avatar'
          src='https://cdn2.vectorstock.com/i/1000x1000/67/21/people-medical-health-logo-icon-brand-identity-vector-42546721.jpg'
          variant='square'
        />
        <Typography className='typography' variant="h6" component="div">
          HealthTrack
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar className='avatar' />
          <Typography className='typography-mail' variant="body1">
            {userInfo.email}
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
