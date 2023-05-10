//get 
export const getReactions = () => {
    return fetch(`http://localhost:8088/reactions`)
    .then(response => response.json())
    }
    export const getDays= () => {
        return fetch(`http://localhost:8088/days`)
        .then(response => response.json())
        }

// sort

export const reactionsSortedByDate = () => {
    return fetch(`http://localhost:8088/reactions?_sort=date&_order=desc`)
    .then(response => response.json())
}
export const sortDays = () => {
    return fetch(`http://localhost:8088/days?_sort=date`)
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


export const sendDay= (dayToAPI) => {
    return fetch(`http://localhost:8088/days`
         , { 
          method: "POST", //adds an object
          headers: {
              "Content-Type": "application/json"
          },
         body: JSON.stringify(dayToAPI)
      })
 }
