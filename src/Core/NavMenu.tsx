import { Box, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react';
import { type NavigateFunction } from 'react-router-dom';

const NavMenu = ({ title, options, navigate }: { title: string, options: { name: string, route: string }[], navigate: NavigateFunction }) => {
  const [anchorMenu, setAnchorMenu] = React.useState<null | HTMLElement>(null);

  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMenu(event.currentTarget);
  };

  return (
    <Box>
                <Typography onClick={(e) => handleOpenMenu(e)}>
                    {title}
                </Typography>
                 <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorMenu}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    open={Boolean(anchorMenu)}
                    onClose={handleCloseMenu}
                    >
                    {options.map((option) => (
                        <MenuItem key={option.name} onClick={() => { navigate(option.route); handleCloseMenu(); }}>
                            <Typography textAlign="center">{option.name}</Typography>
                        </MenuItem>
                    ))
                    }
                    </Menu>
        </Box>
  )
}

export default NavMenu;
