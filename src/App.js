import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { initializeAnecdotes } from './reducers/anecdoteReducer'


const App = () => {
  //add to update on notification
  //const addedNotification = useSelector(({notification}) => notification)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
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