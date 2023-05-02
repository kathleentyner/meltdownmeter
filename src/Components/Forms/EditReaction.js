import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Slider from "../Slider/Slider"
import "./form.css"


export const EditReaction = () => {
   const [value, setValue] = useState()
  const [reaction, setReaction] = useState({date: "", description: ""})
    const { reactionId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      fetch(`http://localhost:8088/reactions/${reactionId}`) //route param
          .then(response => response.json())
          .then((data) => {
              setReaction(data) 
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
                            setReaction(copy)
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
                setReaction(copy)
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

        <button
          onClick={(evt) => handleSaveButtonClick(evt)}
          className="btn btn-primary"
        >
          Save
        </button>
      </form>
    )
  }