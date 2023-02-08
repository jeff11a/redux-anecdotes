//import { dispatchFilter } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"
import {setFilter} from "../reducers/filterReducer"
const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
      // Setting the filter value
      dispatch(setFilter(event.target.value))
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    )
  }
  
  export default Filter