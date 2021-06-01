const initialState = ''

export const filterChange = (value) => {
  return {
    type: 'FILTER_CHANGE',
    data: {
      value,
    },
  }
}

const reducer = (state = initialState, action) => {
  if (action.type === 'FILTER_CHANGE') return action.data.value
  return state
}

export default reducer
