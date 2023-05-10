import Button from '@mui/material/Button'; 
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { reactionsSortedByDate } from "../ApiManager"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


export const Trends = () => {
    const theme = createTheme();
    const [reactions, setReactions] = useState([])
  
    useEffect(
      () => {
          reactionsSortedByDate()
          .then((reactionArray) => {
              setReactions(reactionArray)
            })
        },
        []
        )
        
        const config = () => {
        
            //this is the configuration for the vertical bar graph
        const newConfig = {
          type: 'bar',
          data: data,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: `Hoagie's Perfect Meltdowns`
              }
            }
          },
        }
        return newConfig
    }
    
        //this is the data that manipulates chart.js
        const data = () => {
        const newData = {               
                labels,
                //datasets must be an array for chart.js to work
                datasets: [
                        {
                            label: 'Meltdown Level',
                            data: newLevels, //chart.js maps this data behind the scenes
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        }
                ]
                }
                return newData
            }
    
        
            //this is the right side of the graph
        const newLevels = reactions.map(reaction => reaction.level)
    
            //this is what is at the bottom of the graph
        const labels = reactions.map(reaction => reaction.date);
    
        //created a function to store the data then stored it in a variable
        const newData = data()
        //created a function to store the config then stored it in a variable
        const newConfig = config()
         
    return <>
           <ThemeProvider theme={theme}>
          <CssBaseline />
        
    
            <Box
              sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
          
    }}
             
            >
              <Container maxWidth="lg">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                 Meltdown Meter
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                  Graphing Hoagie's Daily Meltown Score
                  
                 </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
              <Button href="/reaction"variant="contained">Make A Daily Meltdown Report</Button>
              <Button href="/history" variant="outlined">Meltdown History</Button>
                  </Stack>
              </Container>
              </Box>
              </ThemeProvider>  
<Container maxWidth ="lg">
<Bar config={newConfig} data={newData} />
</Container></>
}

