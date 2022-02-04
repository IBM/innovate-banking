import PropTypes from 'prop-types'
import React from 'react'

const MainLayout = ({ children }) => {
  return <div>{children}</div>
}

MainLayout.propTypes = {
  children: PropTypes.any,
}

export default MainLayout
