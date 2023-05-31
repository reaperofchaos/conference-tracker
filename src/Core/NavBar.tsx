import React from 'react';
import { AppBar, Box, Container, IconButton, Toolbar } from '@mui/material';
import { type MenuOptions } from './types';
import NavMenu from './NavMenu';
import { type NavigateFunction } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const NavBar = ({ navigate }: { navigate: NavigateFunction }) => {
  const conferenceOptions: MenuOptions[] = [{ name: 'View Conferences', route: '/conference/' },
    { name: 'Add Conference', route: '/conference/add/' }]
  const presentationOptions: MenuOptions[] = [{ name: 'Add Presentation', route: '/presentation/add' }]
  const authorOptions: MenuOptions[] = [{ name: 'Add Author', route: '/author/add' }]

  return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: '20px', alignItems: 'center' }}>
            <IconButton onClick={() => { navigate('/') }}><HomeIcon sx={{ color: 'white' }} /></IconButton>
            <NavMenu title="Conference" options={conferenceOptions} navigate={navigate}/>
            <NavMenu title="Presentation" options={presentationOptions} navigate={navigate}/>
            <NavMenu title="Author" options={authorOptions} navigate={navigate}/>
            </Box>

          </Toolbar>
          </Container>
          </AppBar>
  )
}

export default NavBar;
