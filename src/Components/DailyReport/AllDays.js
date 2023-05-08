//edit single reaction entry

import { useEffect, useState, } from "react"
import { useNavigate, Link } from "react-router-dom"
import { getReactions} from "../ApiManager"
import "./history.css"

//list out all the reaction entries
export const ReactionList = (reaction) => {
   const [ reactions, setReactions ] = useState([])
    const activeUser = localStorage.getItem("meltdown_user")
    const meltdownUser = JSON.parse(activeUser)//signed in user
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

  const DayList = () => {
   historyArray = []
   if(reaction.date === DayList.reaction){
      jsxArray.push(
      <div className="event--list" key={`events--${i}`}>
          <h3>{getMonthName(i)} ({eventCount})</h3>
          <div>{createEventList(monthlyEvents)}</div>
      </div>
      )
  }
}

  }
  if(eventCount !== 0){
   jsxArray.push(
   <div className="event--list" key={`events--${i}`}>
       <h3>{getMonthName(i)} ({eventCount})</h3>
       <div>{createEventList(monthlyEvents)}</div>
   </div>
   )
}
}

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


       return <>
           <article className="reactions">
             <h1>History</h1>
             <button className="newReaction" onClick={() => navigate("/reaction")}>New Reaction</button>
       

             {
               reactions.map(
                  (reaction) => { 
                     if (!reaction.end) 
             { return <section className="reactionlist" key={reaction.id}>
                   <header>Date: <Link to={`/reaction/${reaction.id}/edit`}>{reaction.date}</Link></header>
                   <div>Description: {reaction.description}</div>
                   <div>Level: {reaction.level}</div>
                   <button onClick={() => deleteReaction(reaction.id)} className="delete_Button">Delete</button>
                   </section> }})}
                  
               {
               reactions.map(
                  (reaction) => {
                     if (reaction.end)
               {return  <section className="reactionlist" key={reaction.id}>
                  <header>Date: <Link to={`/reaction/${reaction.id}/edit`}>{reaction.date}</Link></header>
                  <div>Description: {reaction.description}</div>
                  <div>Level: {reaction.level}</div>
                  <div>Notes: {reaction.notes}</div>
                  <div> AM Meds? {reaction.am ? "Yes" : "No"}</div>
                  <div> PM Meds? {reaction.pm ? "Yes" : "No"}</div>
                  <div> Seizure? {reaction.seizure ? "Yes" : "No"}</div>
                  <button onClick={() => deleteReaction(reaction.id)} className="delete_Button">Delete</button>          
    </section> }})}
     </article>  </>}