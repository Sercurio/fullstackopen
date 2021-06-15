import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  const notificationStyleSuccess = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    display: 'inline-block',
  }
  const notificationStyleError = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    display: 'inline-block',
  }

  if (notification === null || notification === '') return null
  else if (notification.startsWith('SUCCESS'))
    return (
      <div className='success' style={notificationStyleSuccess}>
        {notification}
      </div>
    )
  else if (notification.startsWith('ERROR'))
    return (
      <div className='error' style={notificationStyleError}>
        {notification}
      </div>
    )
}

export default Notification
