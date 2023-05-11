import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Slider from "../Slider/Slider"
import "./form.css"
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const EditReaction = () => {
   const [value, setValue] = useState()
  const [reaction, update] = useState({date: "", description: "", notes: "",  am: "", pm: "", seizure:""})
    const { reactionId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      fetch(`http://localhost:8088/reactions/${reactionId}`) //route param
          .then(response => response.json())
          .then((data) => {
              update(data) 
          })
  }, [reactionId]) //watch state - param
  const handleSaveButtonClick = (event) => {
    event.preventDefault()

    return fetch(`http://localhost:8088/reactions/${reaction.id}`, {
        method: "PUT", //replace object API (remove Post)
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reaction)
    })
        .then(response => response.json())
        .then(() => {
            navigate("/history") //sends user back to ? need to determine
        })
        
}
const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};


const theme = createTheme();

return ( <>
  <ThemeProvider theme={theme}>
    <CssBaseline />

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
          </Stack>
        </Container>
      </Box>         
        </ThemeProvider>    
      <form className="reactionform">
        <h2 className="edittitle">Edit Reaction</h2>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="date"><strong>Date:</strong> </label><div>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        value={reaction.date}
                        onChange={ 
                            (event) => {
                            const copy = {...reaction} 
                            copy.date = event.target.value 
                            update(copy)
                        } 
                    }/>
                 </div>
                </div>
            </fieldset>    
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description"><strong> Upload a photo of Hoagie's Day: </strong> </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={reaction.img}
                        onChange={ 
                            (event) => {
                            const copy = {...reaction} 
                            copy.img = event.target.value 
                            update(copy)
                        } 
                    }/>
                 </div>
                 </fieldset>
            
        <fieldset>
          <div className="form-group">
            <label htmlFor="description"><strong>What Caused Hoagie To Meltdown: </strong> </label>
            <input
              required
              autoFocus
              type="text"
              className="form-control"
              value={reaction.description}
              onChange={(event) => {
                const copy = {...reaction}
                copy.description = event.target.value
                update(copy)
              }}
            />
          </div>
        </fieldset>
       
        <fieldset>
                <div className="form-group">
                    <label htmlFor="level"><strong>How Bad Was Hoagie's Day? </strong></label>
                    <Box
               m={1}
               display="flex"
               justifyContent="flex-start"
               alignItems="left"
               paddingTop={5}
               paddingBottom={13}
               paddingLeft={4}
                       >     
                    <Slider 
                    value = {value}
                     setValue ={setValue}/>  </Box>

            
                        </div>
                        </fieldset>
      
                        <div className =  "meds"><strong> Did Hoagie Get His Medications? </strong></div>
                 <div className="checkboxes">
                 <Checkbox
                    label="AM Meds?" 
                    value={reaction.am}
                    onChange={ 
                        () => {
                        const copy = {...reaction} 
                        copy.am = !reaction.am
                        update(copy)
                    } }/>
                    
                    <Checkbox
                    label="PM Meds?"
                    value={reaction.pm}
                    onChange={ 
                        () => {
                        const copy = {...reaction} 
                        copy.pm = !reaction.pm
                        update(copy)
                    } }/></div>
                  <div className ="seizure"><strong> Any Seizure Activity? </strong> </div>
                  <div className="checkboxes">

                    <Checkbox
                    label="Seizure"
                    value={reaction.seizure}
                    onChange={ 
                        () => {
                        const copy = {...reaction} 
                        copy.seizure = !reaction.seizure
                        update(copy)
                    } }/>
                </div> 
                <div className="form-group">
                    <label htmlFor="notes"><strong> General Health and Behavior Notes: </strong>  </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={reaction.notes}
                        onChange={ 
                            (event) => {
                            const copy = {...reaction} 
                            copy.notes = event.target.value 
                            update(copy)
                        } 
                    }/>
                 </div> 
                 <Button variant="outlined"  onClick={(clickEvent) => handleSaveButtonClick(clickEvent)} >
              Submit
             </Button>
     
      </form></>
    )
  }