import * as React from 'react';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import babyhoagie from '../Images/babyhoagie.png'
import  bed  from '../Images/bed.png'
import hoagiebeach from '../Images/hoagiebeach.png'
import hoagiebirdie from '../Images/hoagiebirdie.png'
import hoagienrg from '../Images/hoagienrg.png'
import morrellfinder from '../Images/morrellfinder.png'

const cards = [1, 2, 3, 4, 5, 6];

const theme = createTheme();

export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    
      <main>
        {/* Hero unit */}
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
             How Was Hoagie's Day?
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Record Hoagie's Big Feelings to Better Support His Wellbeing
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
        <Box
               m={1}
               display="flex"
               justifyContent="center"
               alignItems="center"
               paddingBottom={5}
                       >     
        <ImageList sx={{ width: 1200, height: 600 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
         
      </main>
    </ThemeProvider>

  );
}
const itemData = [
  {
    img: babyhoagie,
    title: 'Baby Hoagie',
  },
  {
    img: bed,
    title: 'Hoagie in a cloud of chaos',
  },
  {
    img: hoagiebeach,
    title: 'Hoagie at the beach',
  },
  {
    img: hoagiebirdie,
    title: 'The pups',
  },
  {
    img: hoagienrg,
    title: 'Hoagie in the New River Gorge',
  },
  {
    img: morrellfinder,
    title: 'Good boy!',
  }
];


