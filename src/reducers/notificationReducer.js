import { createSlice } from "@reduxjs/toolkit";

const noticationReducer = createSlice({
    name: 'notification', initialState: '', reducers: {
        addNotification: (state, action) => {
            return action.payload
        }
    }
})
//action creator
export const setNotification = (message, time) => dispatch => {
    //takes a message and a duration in seconds, and returns a thunk that dispatches the setNotification action with the message and sets a timeout to clear the notification after the specified duration.
    dispatch(addNotification(message))

    setTimeout(() => {
        dispatch(addNotification(''))
    }, 1000 * time);
}
//-action creator-----------------------
export const {addNotification} = noticationReducer.actions
export default noticationReducer.reducer