import {useDispatch } from 'react-redux'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'

const App = () => {

  const dispatch = useDispatch()

  return (
    <div className='container'>
      <h2>Anecdotes</h2>
      <AnecdoteForm/>
      <AnecdoteList/>
      

    </div>
  )
}

export default App