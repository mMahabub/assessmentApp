import React, { useState, useContext, useEffect } from 'react'
import Card from './Shared/Card'
import Button from './Shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisable, setbtnDisable] = useState(true)
    const [message, setmessage] = useState('')

    const { addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setbtnDisable(false)
            setText(feedbackEdit.Item.text)
            setRating(feedbackEdit.Item.rating)
        }
 
      }, [feedbackEdit])

    const handleTextChange = (e) =>{
        if(text === ''){
            setbtnDisable(true)
            setmessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setmessage('Text must be at least 10 characters')
            setbtnDisable(true)
        }else{
            setmessage(null)
            setbtnDisable(false)
        }
        setText(e.target.value)
    }

        const handleSubmit = (e)=>{
            e.preventDefault()
            if(text.trim().length > 10){
                const newFeedback = {
                    text,
                    rating,
                }
                if(feedbackEdit.edit === true){
                    updateFeedback(feedbackEdit.Item.id, newFeedback)
                }else{
                    addFeedback(newFeedback)

                }
         

                setText('')
            }

        }

  
  return (
    <Card>
        <form onSubmit={handleSubmit}>
          
                <h2>How would you rate your service with us?...</h2>
                <RatingSelect select={(rating) => (setRating(rating))}/>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='Write A review..' value={text}/>
                    <Button type='submit' isDisabled={btnDisable}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
           
        </form>
    </Card>
  )
}

export default FeedbackForm