import loginService from '../services/logins'
import { setNotification } from './notificationReducer'

const initialState = null

export const loginUser = (username, password) => {
  return async dispatch => {
    const response = await loginService.login(username, password)
    if (response.token) {
      dispatch(setNotification('SUCCESS Login', 2))
      const connectedUser = {
        username,
        token: response.token,
        id: response.id,
      }
      dispatch({ type: 'LOGIN_USER', data: { connectedUser } })
    } else {
      dispatch(setNotification('ERROR login'), 2)
      dispatch({ type: 'LOGOUT_USER' })
    }
  }
}

export const verifyUserToken = token => {
  return async dispatch => {
    const response = await loginService.verifyToken(token)
    if (response.error) dispatch({ type: 'LOGOUT_USER' })
    else {
      const connectedUser = JSON.parse(localStorage.getItem('user'))
      dispatch({ type: 'LOGIN_USER', data: { connectedUser } })
    }
  }
}

export const logoutUser = () => {
  return async dispatch => {
    dispatch(setNotification('SUCCESS Logout', 2))
    dispatch({ type: 'LOGOUT_USER' })
  }
}

const reducer = (state = initialState, action) => {
  if (action.type === 'LOGIN_USER') {
    localStorage.setItem('user', JSON.stringify(action.data.connectedUser))
    return action.data.connectedUser
  } else if (action.type === 'LOGOUT_USER') {
    localStorage.removeItem('user')
    return null
  }

  return state
}

export default reducer
