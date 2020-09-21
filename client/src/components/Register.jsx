import React, { useState } from 'react'
import { registerUser } from '../services/auth';
import '../css/Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault();
    const userData = await registerUser(formData);
    props.setCurrentUser(userData);
    props.history.push('/home');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="Register">
      <h3>Register</h3>
      <label>
          Username:
             <br/>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          />
          <br/>
      </label>
      <label>
          Email:
             <br/>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        </label>
        <br/>
      <label>
          Password:
             <br/>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
        <button>Submit</button>
        </div>
    </form>
  )
}