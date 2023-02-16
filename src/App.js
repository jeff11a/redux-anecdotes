import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import anecdoteService from './services/anecdote'
import { addAnecdotes } from './reducers/anecdoteReducer'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService.getAll().then(data => dispatch(addAnecdotes(data)))
  }, [dispatch]);

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