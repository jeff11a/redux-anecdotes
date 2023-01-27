import {useDispatch } from 'react-redux'
import Anecdotes from './components/Anecdotes'
import CreateAnecdote from './components/CreateAnecdote'

const App = () => {

  const dispatch = useDispatch()

  return (
    <div className='container'>
      <Anecdotes/>
      <CreateAnecdote/>

    </div>
  )
}

export default App