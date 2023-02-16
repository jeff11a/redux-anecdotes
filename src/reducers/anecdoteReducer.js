import { createSlice } from "@reduxjs/toolkit";

const addId = (state) => {
  console.log(state);
  
  const ids = state.length ? state.map(a => a.id) : null
  console.log(ids);
  
  return ids ? Math.max(...ids) + 1 : 0
} 

//map function
// const asObject = (anecdote, i) => {
//   return {
//     content: anecdote,
//     id: i,
//     votes: 0
//   }
// }

const anecdoteReducer = createSlice({name: 'anecdotes', initialState: [], reducers: {
  voteAnecdote: (state, action) => {
    //payload is inferred,  
    const anecdoteToChange = state.find(anecdote => anecdote.id === action.payload.id )
    const changedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
    return state.map(anecdote => anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote )
  },
  dispatchAnecdote: (state, action) => {
    return [...state, {...action.payload, id: addId(state), votes: 0}]
  },
  addAnecdotes: (state, action) => {
    console.log(action.payload);
    
    return action.payload
  }
}})


export const {voteAnecdote, dispatchAnecdote, addAnecdotes} = anecdoteReducer.actions
export default anecdoteReducer.reducer