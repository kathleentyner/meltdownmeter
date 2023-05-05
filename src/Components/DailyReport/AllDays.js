
import React from "react"
import { useEffect, useState, } from "react"
import { useNavigate, Link } from "react-router-dom"
import { getReactions, getDays, reactionsSortedByDate, sortDays} from "../ApiManager"
import "./history.css"



//list out all the reaction entries
export const ReactionList = ({reaction}) => {
   const [ reactions, setReactions ] = useState([])
   const [days, setDays] = useState({})
    const activeUser = localStorage.getItem("meltdown_user")
    const meltdownUser = JSON.parse(activeUser)//signed in user
    const navigate = useNavigate()
    
    //get all the reactions from the API
    useEffect(
      () => {
         reactionsSortedByDate()
         .then((reactionArray) => {
          setReactions(reactionArray)
         })
      },
      []
  )    

  //get the day entries 
  useEffect(
   () => {
      sortDays()
      .then((reactionArray) => {
       setDays(reactionArray)
      })
   },
   []
)    

//delete day
const deleteDay = (id) => {
   return fetch(`http://localhost:8088/days${id}`, {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(() => {
        getDays()
         .then((reactionArray) => {
          setDays(reactionArray)
         })
         })
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
         <div style={{backgroundImage: `url("https://flic.kr/p/2oyeSXX")`}}>
           <article className="reactions">
             <h1>History</h1>
             <button className="new" onClick={() => navigate("/reaction")}>New Reaction</button>
       

             {
               reactions.map(
                  (reaction) => { 
                   /*  if (!day.end) */
             { return <section className="reactionlist" key={reaction.id}>
                   <h4>Date: <Link to={`/reaction/${reaction.id}/edit`}>{reaction.date}</Link></h4>
                   <div>Description: {reaction.description}</div>
                   <div>Level: {reaction.level}</div>
                   <button onClick={() => deleteReaction(reaction.id)} className="delete_Button">Delete</button>
                   </section> }})}
                  
             {/* { 
               days.map(
                  (day) => {
                     if (day.end)
               {return  <section className="daylist" key={day.id}>
                  <h4>Date: <Link to={`/reaction/${day.id}/edit`}>{day.date}</Link></h4>
                  <div>Notes: {day.notes}</div>
                  <div> AM Meds? {day.am ? "Yes" : "No"}</div>
                  <div> PM Meds? {day.pm ? "Yes" : "No"}</div>
                  <div> Seizure? {day.seizure ? "Yes" : "No"}</div>
                  <button onClick={() => deleteDay(day.id)} className="delete_Button">Delete</button>          
    </section> }})}  */}
     </article></div> </>}