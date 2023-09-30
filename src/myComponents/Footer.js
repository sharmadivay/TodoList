import React from 'react'
import "../App.css"
const Footer = () => {
  let footerStyle ={
    marginTop : "10px"
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
