import React from 'react'
//import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {
  //const dispatch = useDispatch()

  const handleChange = (e) => {
    //dispatch(filterChange(e.target.value))
    props.filterChange(e.target.value)
  }
  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  filterChange,
}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)
export default ConnectedFilter
