//votes are broke, add json post
//6.17 Anecdotes and the backend, step4
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import "@picocss/pico";


store.subscribe(() => {
  console.log('subs');
  console.log(store.getState());
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
