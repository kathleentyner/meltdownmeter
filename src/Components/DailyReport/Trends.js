import Button from '@mui/material/Button'; 
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export const Trends = () => {
    const theme = createTheme();
             
    return (
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


)}