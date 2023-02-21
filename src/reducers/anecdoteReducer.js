import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdote"

const addId = (state) => {
  console.log(state);
  
  const ids = state.length ? state.map(a => a.id) : null
  if(!ids) return 0

  const max = Math.max(...ids)

  if(!isNaN(max)) return max + 1
  else return null

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
  createAnecdote: (state, action) => {
    const newA = anecdoteService.create({...action.payload, id: addId(state), votes: 0})

  },
  addAnecdotes: (state, action) => {
    console.log(action.payload);
    
    return action.payload
  }
}})


export const {voteAnecdote, createAnecdote, addAnecdotes} = anecdoteReducer.actions
export default anecdoteReducer.reducer