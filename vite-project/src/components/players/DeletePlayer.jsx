import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function DeletePlayer() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [result, setResult] = useState(null)

    async function deletePlayer() {

        try {
          const response = await fetch(
              `https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-pt-b/players/${id}`,
            {
              method: 'DELETE',
            }
          );
          const data = await response.json();

          if (data.success === true) {
            console.log("player has not been deleted")
        } else {
            <h2>player Has been Deleted</h2>
            console.log("player has been deleted")
        }

          return data
        } catch (err) {
          console.error(err);
        }
        
    }



  
    return (
        <div>
            <button onClick={deletePlayer}>Delete</button>
            
        </div>
    )
  }
  
  export default DeletePlayer