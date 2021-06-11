import React from 'react'

const Notification = ({ message }) => {
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

  if (message === null) return <br />
  else if (message.startsWith('SUCCESS'))
    return (
      <div className='success' style={notificationStyleSuccess}>
        {message}
      </div>
    )
  else if (message.startsWith('ERROR'))
    return (
      <div className='error' style={notificationStyleError}>
        {message}
      </div>
    )
}

export default Notification
