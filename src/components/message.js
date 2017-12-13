import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Message = ({message}) => (
  message
    ? <span className="message">{message}</span>
    : null
)

Message.propTypes = {
  message: PropTypes.string,
}

// connect the Message component to redux
export default connect(
  (state) => ({message: state.message})
)(Message)
