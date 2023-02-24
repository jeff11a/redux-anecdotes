import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdote"

const anecdoteReducer = createSlice({name: 'anecdotes', initialState: [], reducers: {
  voteAnecdote: (state, action) => {
    //payload is inferred,  
    const anecdoteToChange = state.find(anecdote => anecdote.id === action.payload.id )
    const changedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
    return state.map(anecdote => anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote )
  },
  addAnecdotes: (state, action) => {
    console.log(action.payload);
    
    return action.payload
  }, 
  appendAnecdote: (state, action) => {
    console.log(action.payload);
    
    state.push(action.payload)
  }
}})

//asynchronous action creators
//actions must be exported to use here
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(addAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.create({...content, votes: 0})
    dispatch(appendAnecdote(anecdotes))
  }
}

export const sendVoteAnecdote = (content) => {

  return async dispatch => {
    console.log(content);
    
    const vote = await anecdoteService.vote(content.id, {...content, votes: content.votes+1})
    console.log(vote);
    
    dispatch(voteAnecdote(content)) 
    
  }
}

//--asynchronous action creators------------------
export const {voteAnecdote, addAnecdotes, appendAnecdote} = anecdoteReducer.actions
export default anecdoteReducer.reducer