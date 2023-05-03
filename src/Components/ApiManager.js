//get all the reactions
export const getReactions = () => {
    return fetch(`http://localhost:8088/reactions`)
    .then(response => response.json())
    }
/*get all the end day entries
export const getEndDay = () => {
    return fetch(`http://localhost:8088/endDays`)
    .then(response => response.json() )
}
*/


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
 /*export const sendEndDay= (endDayToAPI) => {
    return fetch(`http://localhost:8088/endDays`
         , { 
          method: "POST", //adds an object
          headers: {
              "Content-Type": "application/json"
          },
         body: JSON.stringify(endDayToAPI)
      })
 }
*/