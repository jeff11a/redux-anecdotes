import { useSelector, useDispatch } from 'react-redux'
import { dispatchVote } from '../reducers/anecdoteReducer'

const Anecdotes = () => {
    //anecdotes and filter are destructured from the combine state
    //TODO: FILTER ANECDOTES
    const anecdotes = useSelector(({anecdotes, filter}) => anecdotes.filter(a => a.content.indexOf(filter) > -1).sort((a, b )=> a.votes - b.votes).reverse())
    const dispatch = useDispatch()

    
    return (
        <div>
            
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button style={{width: '100px', padding: '3px', marginLeft: '6px'}} onClick={() => dispatch(dispatchVote({id: anecdote.id}))}>vote</button>
                    </div>
                </div>
            )}</div>)
}

export default Anecdotes