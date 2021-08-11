import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  //const notification = useSelector((state) => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }

  const renderNotification = () => {
    if (props.notification !== '')
      return <div style={style}>{props.notification}</div>
    else return null
  }
  return renderNotification()
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification
