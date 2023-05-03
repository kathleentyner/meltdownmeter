import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Slider from "../Slider/Slider"
import "./form.css"


export const EditReaction = () => {
   const [value, setValue] = useState()
  const [reaction, update] = useState({date: "", description: "", end:"", date: "", description: "", am: "", pm: "", seizure:""})
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
            navigate("/") //sends user back to ? need to determine
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




    return (
      <form className="reactionedit">
        <h2 className="edittitle">Edit Reaction</h2>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label><div>
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
            <label htmlFor="description">How Bad Was It?: </label>
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
                    <label htmlFor="level">How Bad Was It?</label>
                      
                    <Slider value = {value}
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
                        copy.end= !reaction.end
                        update(copy)
                    } }/></div>
    
                <div className="form-group">
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
          onClick={(evt) => handleSaveButtonClick(evt)}
          className="btn btn-primary"
        >
          Save
        </button>
      </form>
    )
  }