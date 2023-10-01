import React from 'react'
import "../App.css"
const Footer = () => {
  let footerStyle ={
    position: "relative",
    width: "100%",
    bottom: 0,
  }
  return (
    <footer className='bg-dark  text-light py-3 footer' style={footerStyle}>
      <p className="text-center">
        Copyright &copy; MyTodoList.com
      </p>
      </footer>
    
  )
}

export default Footer
