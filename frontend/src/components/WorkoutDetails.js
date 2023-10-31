import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import WorkoutForm from "../components/WorkoutForm"

const WorkoutDetails = ({ workout }) => {
  const [error, setError] = useState(null)

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()
    if (!response.ok) {
      setError(json.error)
      console.log('new workout not deleted:', json)
    }
    if (response.ok) {
      setError(null)
      console.log('new workout deleted:', json)
    }
    
  }

    return (
      <div className="workout-details">
        <h4><strong>Folder Name: </strong> {workout.title}</h4>
        <p><strong>Folder Number: </strong>{workout.load}</p>
        <p><strong>Number of Files: </strong>{workout.reps}</p>
        <button onClick={handleClick}>delete</button>
        {error && <div className="error">{error}</div>}
      </div>
    )
  }
  
  export default WorkoutDetails