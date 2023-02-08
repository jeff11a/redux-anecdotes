import { createSlice } from "@reduxjs/toolkit";

const anecdotesAtStart = {
  filter: '',
  anecdotes: [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]}

const addId = (state) => {
  const ids = state.map(a => a.id)
  console.log(ids);
  return Math.max(...ids) + 1
} 

//map function
const asObject = (anecdote, i) => {
  return {
    content: anecdote,
    id: i,
    votes: 0
  }
}

//Returns a list
const initialState = anecdotesAtStart.anecdotes.map(asObject)

const anecdoteReducer = createSlice({name: 'anecdotes', initialState: initialState, reducers: {
  dispatchVote: (state, action) => {
    //payload is inferred,  
    const anecdoteToChange = state.find(anecdote => anecdote.id === action.payload.id )
    const changedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
    return state.map(anecdote => anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote )
  },
  dispatchAnecdote: (state, action) => {
    return [...state, {...action.payload, id: addId(state), votes: 0}]
  }
}})


export const {dispatchVote, dispatchAnecdote} = anecdoteReducer.actions
export default anecdoteReducer.reducer