import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';

export const SimpleBottomNavigation = () =>{
  const [value, setValue] = React.useState(0);

 
  return (
    
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
        <BottomNavigationAction label="Home" icon={ < HomeIcon />}  />
        <BottomNavigationAction label="New" icon={< AddBoxIcon />} />
        <BottomNavigationAction label="Trends" icon={<AlignVerticalBottomIcon />} />
      </BottomNavigation>
    </Paper>
  );
}