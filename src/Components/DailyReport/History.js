import { useEffect, useState } from "react"
import { getReactions} from "../ApiManager.js"
import { useNavigate } from "react-router-dom"
import "./events.css"

export const ReactionList = () => {

  const [reactions, setReactions] = useState([])
  const navigate = useNavigate()

 //get all the reactions from the API
 useEffect(
    () => {
       getReactions()
       .then((reactionArray) => {
        setReactions(reactionArray)
       })
    },
    []
)    


    const getDate = (day) => {
        const date = new Date()
        date.setDate(day- 1)
        return date.toLocaleString('en-US', { day: 'long' })
    }

    const createEventList = (eventsArray) => {

        return eventsArray.map(singleEvent => {

            return <section className="event" key={`event--${singleEvent.id}`}>
                        <div className="event--name bg-blue-200">
                            <a href={`/event/edit/${singleEvent.id}`} title="Click to edit">{singleEvent.name}</a>
                        </div>
                        <div className="event--location bg-blue-200">Location: {singleEvent.location} </div>
                        <div className="event--date bg-blue-200">Date: {singleEvent.date} </div>
                    </section>
        })
    }

    const eventsByMonth = () => {

        const jsxArray = []
        
        for(let i = 1; i < 13; i++){

            const monthlyEvents = []
            let eventCount = 0
            events.forEach(event => {

                const [,eventMonth] = event.date.split("-")
                if(parseInt(eventMonth) === i){
                    monthlyEvents.push(event)
                    eventCount++
                }
            })

            if(eventCount !== 0){
                jsxArray.push(
                <div className="event--list" key={`events--${i}`}>
                    <h3>{getMonthName(i)} ({eventCount})</h3>
                    <div>{createEventList(monthlyEvents)}</div>
                </div>
                )
            }
        }

        return jsxArray
    }
    


    

    return <article className="events">

        {eventsByMonth()}

        <button className="button" onClick={() => navigate("/event/create")}>Add Event</button>

  </article>



}