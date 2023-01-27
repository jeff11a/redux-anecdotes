import { useDispatch } from "react-redux"
import { dispatchAnecdote } from "../reducers/anecdoteReducer"

const CreateAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        dispatch(dispatchAnecdote(content))
    } 

    return (
        <>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button>create</button>
      </form>
        </>
    )
}

export default CreateAnecdote