import {useDispatch } from 'react-redux'
import Anecdotes from './components/AnecdoteList'
import CreateAnecdote from './components/AnecdoteForm'

const App = () => {

  const dispatch = useDispatch()

  return (
    <div className='container'>
      <CreateAnecdote/>
      <Anecdotes/>
      

    </div>
  )
}

export default App