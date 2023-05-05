import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { sendReaction } from "../ApiManager"
import {sendDay} from "../ApiManager"
import Slider from "../Slider/Slider"
import "./form.css"


export const ReactionForm = () => {

    const [value, setValue] = useState(0)
    const [day, updateDay] = useState({
    
        date: "",
        notes: "",
        am: false, 
        pm: false, 
        seizure: false
    })
    const [reaction, update] = useState({
        date: "", 
        description: "",   
    })
   const [checked, setChecked ] = useState(false)
   
   
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

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

    const reactionToAPI = {//Create the reaction object that will be saved to the API
       //primary key, id, is set by server
        userId: meltdownUser.id,
        date: reaction.date,
        description: reaction.description,
        level: value
   

    }
const dayToAPI = {
    end: day.end,
    date: day.date,
    notes: "",
    am: day.am, 
    pm: day.pm, 
    seizure: day.seizure
}



 sendReaction(reactionToAPI)
    .then(( )=>  {
        navigate("/history") 

   
})
if (checked === true){
sendDay(dayToAPI)
.then(() => {
    navigate("/history")
})}
    }

    return (
        <form className="reactionform">
            <h2 className="title">Record A Reaction</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Date">Date:</label>
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
                    <label htmlFor="description">What Happened?: </label>
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
                    <label htmlFor="level">How Bad Was It?</label>
                      
                    <Slider 
                    value = {value}
                     setValue ={setValue}/> 
                        </div>
                        </fieldset>
            
            <div className="checkboxes">
                 <Checkbox
                    label="End the Day??"
                    onChange={ 
                        () => {
                     setChecked(true)  
                    } }/>                
                      </div>

                    {checked ?

           <> <div className="form-group">
                    <label htmlFor="description">How Was Hoagie's Day?: </label>
                    <fieldset>
                <div className="form-group">
                    <label htmlFor="Date">Date:</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        value={day.date}
                        onChange={ 
                            (event) => {
                            const copy = {...day} 
                            copy.date= event.target.value 
                            updateDay(copy)
                        } 
                    }/>
                </div>
            </fieldset>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={day.notes}
                        onChange={ 
                            (event) => {
                            const copy = {...day} 
                            copy.notes = event.target.value 
                            updateDay(copy)
                        } 
                    }/>
                 </div> 
                 <div className="checkboxes">
                 <Checkbox
                    label="AM Meds?"
                    value={day.am}
                    onChange={ 
                        () => {
                        const copy = {...day} 
                        copy.am = !day.am
                        updateDay(copy)
                    } }/>
                    
                    <Checkbox
                    label="PM Meds?"
                    value={day.pm}
                    onChange={ 
                        () => {
                        const copy = {...day} 
                        copy.pm = !day.pm
                        updateDay(copy)
                    } }/>

                    <Checkbox
                    label="Seizure?"
                    value={day.seizure}
                    onChange={ 
                        () => {
                        const copy = {...day} 
                        copy.seizure = !day.seizure
                        updateDay(copy)
                    } }/>
                    
                </div> </> : "" 
                }

            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="submit">
                Submit
            </button>

   

        </form>
)
}