import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { sendReaction } from "../ApiManager"
import Slider from "../Slider/Slider"
import "./form.css"

export const ReactionForm = () => {

    const [value, setValue] = useState(0)
    const [reaction, update] = useState({
        date: "", 
        description: "",
        end: false,
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

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

    const reactionToAPI = {//Create the reaction object that will be saved to the API
       //primary key, id, is set by server
        userId: meltdownUser.id,
        date: reaction.date,
        description: reaction.description,
        level: value,
        end: reaction.end,
        notes: "",
        am: reaction.am, 
        pm: reaction.pm, 
        seizure: reaction.seizure

    }




 sendReaction(reactionToAPI)
    .then(( )=>  {
        navigate("/") 

   
})
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
                    value={reaction.end}
                    onChange={ 
                        () => {
                        const copy = {...reaction} 
                        copy.end = !reaction.end
                        update(copy)
                    } }/>                
                      </div>
            {
                reaction.end 
              ? 
              <>  <div className="form-group">
                    <label htmlFor="description">How Was Hoagie's Day?: </label>
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
                    } }/>

                    <Checkbox
                    label="Seizure?"
                    value={reaction.seizure}
                    onChange={ 
                        () => {
                        const copy = {...reaction} 
                        copy.seizure = !reaction.seizure
                        update(copy)
                    } }/>
                    
                </div> 

            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="submit">
                Submit
            </button>
</>
:
<button 
onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
    className="submit">
    Submit
</button>

                }    

        </form>
)
}