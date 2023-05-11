
import Button from '@mui/material/Button';
import { useEffect, useState, } from "react"
import { useNavigate, Link } from "react-router-dom"
import { getReactions, reactionsSortedByDate } from "../ApiManager"
import "./history.css"
import DeleteIcon from '@mui/icons-material/Delete';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';


//list out all the reaction entries
export const ReactionList = (reaction) => {
   const [reactions, setReactions] = useState([])
   const activeUser = localStorage.getItem("meltdown_user")
   const meltdownUser = JSON.parse(activeUser)//signed in user
   const navigate = useNavigate()

   //get all the reactions from the API
   useEffect(
      () => {
         reactionsSortedByDate()
            .then((reactionArray) => {
               setReactions(reactionArray)
            })
      },
      []
   )

   //delete a reaction
   const deleteReaction = (id) => {
      return fetch(`http://localhost:8088/reactions/${id}`, {
         method: "DELETE"
      })
         .then(response => response.json())
         .then(() => {
            getReactions()
               .then((reactionArray) => {
                  setReactions(reactionArray)
               })
         })
   }

   const theme = createTheme();
             
return <>
       <ThemeProvider theme={theme}>
      <CssBaseline />
    
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#d7e4fc',
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
             History
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Daily Meltdown Reports
             </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              </Stack>
          </Container>
          <Box
               m={1}
               display="flex"
               justifyContent="center"
               alignItems="center"
                       >     
          <Button href="/reaction" align="center" variant="contained">Make a Daily Meltdown Report</Button>
         </Box>
       </Box>
          </ThemeProvider>  

   
         <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 300,
          height: 800,
          paddingBottom: 20
        },
      }}
    >
     { reactions.map(
            (reaction) => {
               return   <section className="card" key={reaction.id}>
                
                  <header>
                   <h3>Date: {reaction.date}</h3> 
                     </header>  
                     <CardMedia
                        component="img"
                        height="300"
                        width="300"
                        image={reaction.img}
                        
                        alt="Hoagie Dog"
                     />

                
                  <div><strong>What Made Hoagie Meltdown Today?:</strong> {reaction.description}</div>
                  <div><strong>Meltdown Level: </strong>{reaction.level}</div>
                  <div><strong> Did Hogie Take His Medications?</strong></div>
                  <div> <strong>AM Meds?</strong> {reaction.am ? "✅" : "❌"}</div>
                   <div> <strong>PM Meds?</strong> {reaction.pm ? "✅" : "❌"}</div>
                  <div> <strong>Did Hoagie Exhibit Any Seizure Activity?</strong> {reaction.seizure ? "🚩" : "No"}</div>
                 <div><strong>General Health and Behavior Notes:</strong> {reaction.notes}</div>
                 <Box
               m={1}
               display="flex"
               justifyContent="center"
               alignItems="center"
               paddingBottom={20}
                       >   
               <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            <Button variant="contained" padding={1} align="center" href={`/reaction/${reaction.id}/edit`}>
        Edit
      </Button>      
                <Button variant="outlined" align="center" padding={1} onClick={() => deleteReaction(reaction.id)} startIcon={<DeleteIcon />}>
        Delete
      </Button>
      </Stack>
      
      </Box>
               
                </section>
        
    
         
               })}       
         
 
  </Box>
   </>
}             
