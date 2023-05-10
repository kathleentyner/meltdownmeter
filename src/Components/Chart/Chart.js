import {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { reactionsSortedByDate } from "../ApiManager"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  
  
  export const Chart = () => {
      const [reactions, setReactions] = useState([])
  
useEffect(
          () => {
              reactionsSortedByDate()
              .then((reactionArray) => {
                  setReactions(reactionArray)
                })
            },
            []
            )
            
            const config = () => {
            
                //this is the configuration for the vertical bar graph
            const newConfig = {
              type: 'bar',
              data: data,
              options: {
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: `Hoagie's Perfect Meltdowns`
                  }
                }
              },
            }
            return newConfig
        }

            //this is the data that manipulates chart.js
            const data = () => {
            const newData = {               
                    labels,
                    //datasets must be an array for chart.js to work
                    datasets: [
                            {
                                label: 'Meltdown Level',
                                data: newLevels, //chart.js maps this data behind the scenes
                                borderColor: 'rgb(53, 162, 235)',
                                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                            }
                    ]
                    }
                    return newData
                }

            
                //this is the right side of the graph
            const newLevels = reactions.map(reaction => reaction.level)

                //this is what is at the bottom of the graph
            const labels = reactions.map(reaction => reaction.date);

            //created a function to store the data then stored it in a variable
            const newData = data()
            //created a function to store the config then stored it in a variable
            const newConfig = config()

    //  console.log(newLevels)  
    return <Bar config={newConfig} data={newData} />
}