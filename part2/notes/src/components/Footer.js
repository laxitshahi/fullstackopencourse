import React from 'react'
const Footer = () => {
    const footerStyle = {   
      color: 'green',   //react incline style, not CSS
      fontStyle: 'italic',
      fontSize: 16
    }
    return (
      <div style={footerStyle}>
        <br />
        <em>Note app, Department of Computer Science, University of Helsinki 2021</em>
      </div>
    )
  }

export default Footer