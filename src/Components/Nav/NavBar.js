import { Link, useNavigate, navigate } from "react-router-dom"
import "./NavBar.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()
            
              const handleChange = (event, newValue) => {
                setValue(newValue);
              };
            
              return (
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  <Tabs value={value} onChange={handleChange} centered>
                    <Tab  label="Home" href="/" />
                    <Tab label="Daily Meltdown Report" href="/reaction" />
                    <Tab label="History" href="/history" />
                    <Tab label="Trends" href="/trends" />
                     <Tab label ="Logout" onClick={() => {
                    localStorage.removeItem("meltdown_user")
                    navigate("/", {replace: true})}}/>
                    </Tabs>
                </Box>
)}