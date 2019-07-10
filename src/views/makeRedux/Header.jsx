import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './React-Redux'
class Headers extends Component {
  static contextTypes = {
    themeColor: PropTypes.string
  }
  render () {
    return (
      <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
const Header = connect(mapStateToProps)(Headers)

export default Header