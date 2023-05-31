import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import { Box } from '@mui/material'

const Main = () => {
  const navigate = useNavigate();

  return (
        <Box>
            <NavBar navigate={navigate}/>
            <Outlet />
        </Box>
  )
}

export default Main;
