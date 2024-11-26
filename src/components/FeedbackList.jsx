
import {useContext} from 'react'
import FeedbackItem from "./FeedbackItem"
import Spinner from './Shared/Spinner'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList(){
    const {feedback,isLoading} = useContext(FeedbackContext)
    if(!isLoading &&(!feedback || feedback.length === 0)){
        return <p>No feedback yet</p>
    }
    
    return isLoading ? <Spinner/> : (    <div  className="feedback-list">
          
        {feedback.map((item) =>(
         
            <FeedbackItem key={item.id} item ={item} 
            />
          
        ))}
      
    </div>)
    







    // return(
      
    //     <div  className="feedback-list">
    //         {feedback.map((item) =>(
    //             <FeedbackItem key={item.id} item ={item} 
    //             handleDelete={handleDelete}
    //             />

    //         ))}
    //     </div>
    // )
}



export default FeedbackList