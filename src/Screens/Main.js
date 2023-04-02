import React from 'react'
import { Link } from 'react-router-dom'
function Main() {
  return (
    <div>
      <h1>Sowjanya</h1><br />
      <Link to="Login">Login</Link><br />
      <Link to="welcome">Welcome</Link><br />
      <Link to="textEditor">RichTextEditor</Link>

    </div>
  )
}

export default Main

