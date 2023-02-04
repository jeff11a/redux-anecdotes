import { createSlice } from "@reduxjs/toolkit"


export const filterReducer = createSlice({name: 'filter', initialState: '', reducers: {
    setFilter: (state, action) => action.payload
}})

// const filterReducer = (state = '', action) => {
//     switch (action.type) {
//         case 'SET_FILTER':
            
//             return action.payload
    
//         default:
//             return state
//     }
// }

//Action creators 

export const dispatchFilter = (payload) => {
return {
    type: 'SET_FILTER', 
    payload: payload
}
}
//-ac---------------

export const {setFilter} = filterReducer.actions

export default filterReducer.reducer