//edit single reaction entry

import { useEffect, useState, } from "react"
import { useNavigate, Link } from "react-router-dom"
import {getReactions} from "./TasksApiManager"
import "./Tasks.css"

//list out all the products
export const ReactionList = (reactions) => {
    const [ reactions, setReactions ] = useState([])
    //const [filteredTasks, setFiltered] = useState([])
    const activeUser = localStorage.getItem("meltdown_user")
    const meltdownUser = JSON.parse(activeUser)//signed in user
    const navigate = useNavigate()
    
    //get the tasks from the API
    useEffect(
      () => {
         getReactions()
         .then((reactionArray) => {
          setReactions(reactionArray)
         })
      },
      []
  )    

//delete
const deleteReaction = (id) => {
  return fetch(`http://localhost:8088/reactions/${id}`, {
       method: "DELETE"
   })
       .then(response => response.json())
       .then(() => {
        getReactions()
        .then((reactionArray) => {
         setTasks(reactionArray)
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
        <header>
      <Link to={`/reaction/${reaction.id}/edit`}>{reaction.date}</Link></header>
           <div>description: {task.description}</div>
          <div className="form-group">
                    <label htmlFor="level">How Bad Was It?</label>
                      
                    <Slider value = {value}
                     setValue ={setValue}/> 
                        </div>
                        
      <button onClick={() => deleteReaction(reaction.id)}
      className="delete_Button">Delete</button>
      </section>     })}
     </article> </>}