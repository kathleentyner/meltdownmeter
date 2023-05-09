import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { sendReaction } from "../ApiManager"
import Slider from "../Slider/Slider"
import "./form.css"
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';

export const ReactionForm = () => {

    const [value, setValue] = useState(0) 
    const [reaction, update] = useState({
        date: "", 
        description: "",
        notes: "",
        am: false, 
        pm: false, 
        seizure: false
    })

   
   const Checkbox = ({ label, value, onChange}) => {
        return (
          <label>
            <input type="checkbox" checked={value} onChange={onChange}/>
            {label}
          </label>
        )
      }
const navigate = useNavigate()
    const activeUser = localStorage.getItem("meltdown_user")
    const meltdownUser = JSON.parse(activeUser)//signed in user
    const theme = createTheme();

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

    const reactionToAPI = {//Create the reaction object that will be saved to the API
       //primary key, id, is set by server
        userId: meltdownUser.id,
        date: reaction.date,
        description: reaction.description,
        level: value,
        notes: reaction.notes,
        am: reaction.am, 
        pm: reaction.pm, 
        seizure: reaction.seizure
   

    }
 sendReaction(reactionToAPI)
    .then(( )=>  {
        navigate("/history") 

   
})}

    return ( <>
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
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Date"><strong>Today's Date: </strong></label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        value={reaction.date}
                        onChange={ 
                            (event) => {
                            const copy = {...reaction} 
                            copy.date= event.target.value 
                            update(copy)
                        } 
                    }/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description"><strong>What Caused Hoagie To Meltdown: </strong> </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={reaction.description}
                        onChange={ 
                            (event) => {
                            const copy = {...reaction} 
                            copy.description = event.target.value 
                            update(copy)
                        } 
                    }/>
                 </div>
                 </fieldset>
                <fieldset>
                <div className="form-group">
                    <label htmlFor="level"><strong>How Bad Was Hoagie's Day? </strong></label>
                       
                    <Slider 
                    value = {value}
                     setValue ={setValue}/> 
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
               
        </form>   
</>
    )}