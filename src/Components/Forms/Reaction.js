import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { sendReaction } from "../ApiManager"
import Slider from "../Slider/Slider"
import "./form.css"

export const ReactionForm = () => {

    const [value, setValue] = useState(0)
    const [reaction, update] = useState({
        date: "", 
        description: ""
    })
console.log(value)

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
                    <label htmlFor="Date">date:</label>
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
                      
                    <Slider value = {value}
                     setValue ={setValue}/> 
                        </div>
                        </fieldset>
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="submit">
                Submit
            </button>
        </form>
)
}