import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const EditEndDay = () => {
    const [day, setDay] = useState({date: "", description: "", am: "", pm: "", seizure:""})
    const { dayId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      fetch(`http://localhost:8088/endDays/${dayId}`) //route param
          .then(response => response.json())
          .then((data) => {
              setDay(data) 
          })
  }, [dayId]) //watch state - param
  const handleSaveButtonClick = (event) => {
    event.preventDefault()

    return fetch(`http://localhost:8088/reactions/${day.id}`, {
        method: "PUT", //replace data in API (remove Post)
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
        <h2 className="edittitle">Edit Day</h2>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label><div>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        value={day.date}
                        onChange={ 
                            (event) => {
                            const copy = {...day} 
                            copy.date = event.target.value 
                            setDay(copy)
                        } 
                    }/>
                 </div>
                </div>
            </fieldset>    
        
        <fieldset>
          <div className="form-group">
            <label htmlFor="description">How Was Hoagie's Day?: </label>
            <input
              required
              autoFocus
              type="text"
              className="form-control"
              value={day.description}
              onChange={(event) => {
                const copy = {...day}
                copy.description = event.target.value
                setReaction(copy)
              }}
            />
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
                copy.reaction = event.target.value
                setReaction(copy)
              }}
            />
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