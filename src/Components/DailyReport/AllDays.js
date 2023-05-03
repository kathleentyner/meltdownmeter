//edit single reaction entry

import { useEffect, useState, } from "react"
import { useNavigate, Link } from "react-router-dom"
import { getReactions} from "../ApiManager"

//list out all the reaction entries
export const ReactionList = (reaction) => {
   const [ reactions, setReactions ] = useState([])
   const [ day, setDay] = useState([])
    //const [filteredTasks, setFiltered] = useState([])
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
    <h1>Hoagie's Days</h1>
    <button className="newReaction" onClick={() => navigate("/reaction")}>New Reaction</button>   
       <section className="reactionsheader">History</section>
     {
      reactions.map(
          (reaction) => {
     return <section className="reactionlist" key={reaction.id}>
        <header>Date: 
      <Link to={`/reaction/${reaction.id}/edit`}>{reaction.date}</Link></header>
           <div>Description: {reaction.description}</div>
           <div>Level: {reaction.level}</div>
           <div>Notes: {reaction.notes}</div>
           <div> AM Meds? {reaction.am}</div>
           <div> PM Meds? {reaction.pm}</div>
           <div> Seizure? {reaction.seizure}</div>
                        
      <button onClick={() => deleteReaction(reaction.id)}
      className="delete_Button">Delete</button>
      </section>     })}
     </article> </>}