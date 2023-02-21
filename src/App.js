import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import anecdoteService from './services/anecdote'
import { addAnecdotes } from './reducers/anecdoteReducer'
import { useSelector } from 'react-redux'


const App = () => {
  const addedNotification = useSelector(({notification}) => notification)

  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService.getAll().then(data => dispatch(addAnecdotes(data)))
  }, [addedNotification]);

  return (
    <div className='container'>
      <h2>Anecdotes</h2>
      <Notification/>
      <AnecdoteForm/>
      <Filter/>
      <AnecdoteList/>
      


    </div>
  )
}

export default App