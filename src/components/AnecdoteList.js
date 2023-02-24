import { useSelector, useDispatch } from 'react-redux'
import { sendVoteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdotes = () => {

    const voteAnecdoteAndNotification = (anecdote) => {
        dispatch(sendVoteAnecdote(anecdote))
        const newText = `You voted '${anecdote.content}'`
        
        dispatch(setNotification(newText))    
        setTimeout(() => {
            dispatch(setNotification(''))    
        }, 5000);
      
      }
    //anecdotes and filter are destructured from the combine state
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
                        <button style={{width: '100px', padding: '3px', marginLeft: '6px'}} onClick={() => voteAnecdoteAndNotification(anecdote)}>vote</button>
                    </div>
                </div>
            )}</div>)
}

export default Anecdotes