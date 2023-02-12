import { useDispatch } from "react-redux"
import { dispatchAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const CreateAnecdote = () => {
    const dispatch = useDispatch()

    const dispatchNotification = (text) => {
        const newText = `You added '${text}'`
        
        dispatch(setNotification(newText))    
        setTimeout(() => {
            dispatch(setNotification(''))    
        }, 5000);
      
      }

    
    const addAnecdote = (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        dispatch(dispatchAnecdote({content: content}))
        dispatchNotification(content)

    } 

    return (
        <>
        <h2>Create new</h2>
        <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button>create</button>
      </form>
        </>
    )
}

export default CreateAnecdote