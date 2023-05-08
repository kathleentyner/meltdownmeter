import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';

export const SimpleBottomNavigation = () =>{
  const [value, setValue] = React.useState(0);
  return (
    <Box sx={{ width: 500 }}>
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
    </Box>
  );
}