import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/Login.css"
export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }



  return (
    <form>
      <div className="Login">
      <h3>Login</h3>
      <input type='text' name='username' value={formData.username} onChange={handleChange} />
      <br/>
      <input type='text' name='password' value={formData.password} onChange={handleChange}/>
      <Link to='/register'>Register</Link>
      <button>Submit</button>
      </div>
    </form>
  )
}
