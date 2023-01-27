import { useSelector, useDispatch } from 'react-redux'
import { dispatchVote } from '../reducers/anecdoteReducer'

const Anecdotes = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    
    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => dispatch(dispatchVote(anecdote.id))}>vote</button>
                    </div>
                </div>
            )}</div>)
}


export default Anecdotes