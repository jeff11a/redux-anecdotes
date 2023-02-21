import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import {setNotification} from "../reducers/notificationReducer"
//import anecdoteService from "../services/anecdote"

const CreateAnecdote = () => {
    const dispatch = useDispatch()

    const changeNotification = (text) => {
        const newText = `You added '${text}'`
        
        dispatch(setNotification(newText))    
        setTimeout(() => {
            dispatch(setNotification(''))    
        }, 5000);
      
      }

    
    const addAnecdote = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        dispatch(createAnecdote({content: content}))
        //const newA = await anecdoteService.create({content})
        //console.log(newA);
        
        changeNotification(content)

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