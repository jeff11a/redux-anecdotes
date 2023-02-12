import { createSlice } from "@reduxjs/toolkit";

const noticationReducer = createSlice({
    name: 'notification', initialState: '', reducers: {
        setNotification: (state, action) => {
            return action.payload
        }
    }
})


export const {setNotification, removeNotification} = noticationReducer.actions
export default noticationReducer.reducer