import {useDispatch } from 'react-redux'
import Anecdotes from './components/Anecdotes'
const App = () => {

  const dispatch = useDispatch()

  return (
    <div>
      <Anecdotes/>
      <h2>create new</h2>
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App