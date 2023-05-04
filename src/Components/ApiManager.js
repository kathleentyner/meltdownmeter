//get all the reactions
export const getReactions = () => {
    return fetch(`http://localhost:8088/reactions`)
    .then(response => response.json())
    }
// sort

export const reactionsSortedByDate = () => {
    return fetch(`http://localhost:8088/reactions?_sort=date&_order=asc`)
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