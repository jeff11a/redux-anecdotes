import { dispatchFilter } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const Filter = () => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
      // Setting the filter value
      return dispatch(dispatchFilter(event.target.value))
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