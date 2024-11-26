
import {createContext, useState,useEffect} from 'react'

const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) =>{
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([
   
      
    ])

 
    const [feedbackEdit, setFeedbackEdit] = useState({
        Item: {},
        edit: false,
    })

    useEffect(() => {
        fetchFeedback()

    }, [])

    // fetch data
    const fetchFeedback = async () =>{
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }


  
     const addFeedback = async (newFeedback) =>{

        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        const data = response.json()
        setFeedback([data, ...feedback])

    }

    const deleteFeedback =async (id) => {
        if(window.confirm('Are You Sure Delete This Item?,,,')){
            await fetch(`/feedback/${id}`, {method: 'DELETE'})
         setFeedback(feedback.filter((Item) => Item.id !==id))
        }
 
     }

    //  Update Feedback Item
    const updateFeedback = async (id,updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })

        const data = response.json()
        setFeedback(feedback.map((Item) => Item.id === id? {...Item, ...data} : Item))
        
        

    }



     const editFeedback = (Item)=>{
        setFeedbackEdit({
            Item,
            edit: true
        })
     }
 
    return ( 
    <FeedbackContext.Provider 
    value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}
    >
        {children}

    </FeedbackContext.Provider>
    )

}

export default FeedbackContext