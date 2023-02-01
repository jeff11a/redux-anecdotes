

const filterReducer = (state = '', action) => {
    switch (action.payload) {
        case 'SET_FILTER':
            
            return action.payload
    
        default:
            return state
    }
}

//Action creators 

export const dispatchFilter = (payload) => {
return {
    type: 'SET_FILTER', 
    payload: payload
}
}
//-ac---------------

export default filterReducer