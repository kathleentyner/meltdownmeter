//get all the reactions
export const getReactions = () => {
    return fetch(`http://localhost:8088/reactions`
    .then(response => response.json()))
    }


//get single reaction by Id 
 export const getTaskById = (id) => {
    return fetch(`http://localhost:8088/tasks/${id}`
        .then(response => response.json()))
}
  
//edit single reaction
export const editTask = (id) => {
    return fetch (`http://localhost:8088/tasks/${id}`, {
        method: "PUT", //replace data in API (remove Post)
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
    })
        .then(response => response.json())
       
}



// Submit a single reaction report to the database
export const sendReaction= (reactionToAPI) => {
    return fetch(`http://localhost:8088/reactions`
         , { 
          method: "POST", //adds an object
          headers: {
              "Content-Type": "application/json"
          },
         body: JSON.stringify(reactionToAPI)
      })
 }
 export const sendEndDay= (endDayToAPI) => {
    return fetch(`http://localhost:8088/endDays`
         , { 
          method: "POST", //adds an object
          headers: {
              "Content-Type": "application/json"
          },
         body: JSON.stringify(endDayToAPI)
      })
 }
