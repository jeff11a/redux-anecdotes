import { createSlice } from "@reduxjs/toolkit";

const noticationReducer = createSlice({
    name: 'notification', initialState: '', reducers: {
        setNotification: (action) => {
            return action.payload
        }
    }
})

export default noticationReducer.reducer