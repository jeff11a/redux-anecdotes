import { useSelector, useDispatch } from 'react-redux'
import { dispatchVote } from '../reducers/anecdoteReducer'

const Anecdotes = () => {
    const anecdotes = useSelector(state => state.sort((a, b )=> a.votes - b.votes).reverse())
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
                        <button style={{width: '100px', padding: '3px', marginLeft: '6px'}} role='button' onClick={() => dispatch(dispatchVote(anecdote.id))}>vote</button>
                    </div>
                </div>
            )}</div>)
}


export default Anecdotes