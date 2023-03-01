import { createSlice } from "@reduxjs/toolkit";

const noticationReducer = createSlice({
    name: 'notification', initialState: '', reducers: {
        addNotification: (state, action) => {
            return action.payload
        }
    }
})

export const setNotification = (message, time) => dispatch => {
    dispatch(addNotification(message))

    setTimeout(() => {
        dispatch(addNotification(''))
    }, 1000 * time);
}

export const {addNotification} = noticationReducer.actions
export default noticationReducer.reducer