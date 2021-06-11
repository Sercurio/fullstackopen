const initialState = ''

let nextNotificationId = 0
export const setNotification = (message, timeout) => {
  const id = ++nextNotificationId
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: {
        id,
        message,
        timeout,
      },
    })
    setTimeout(
      () =>
        dispatch({
          type: 'HIDE_NOTIFICATION',
          data: { id },
        }),
      timeout * 1000
    )
  }
}

const reducer = (state = initialState, action) => {
  if (action.type === 'HIDE_NOTIFICATION') {
    if (nextNotificationId === action.data.id) return ''
  } else if (action.type === 'SET_NOTIFICATION') {
    return action.data.message
  }
  return state
}

export default reducer
