import React from 'react';
import { Link } from 'react-router-dom';
import { removeToken } from '../services/auth';
import { useHistory } from 'react-router-dom';
import '../css/Header.css'

export default function Header(props) {
  const history = useHistory();

  const handleLogout = () => {
    props.setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push('/');
  }

  return (
    <header>
      <div className= "title">
        <h1>Munch Madness</h1>
      </div>
      <hr />
      <div className= 'user'>
      {
        props.currentUser ? (
          <>
            <p>{props.currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
            <Link to='/login'>Login / Sign Up</Link>
           
          )
      }
        <hr />
        </div>
        {
        props.currentUser && (
          <>
            <Link to='/'>Home</Link>
            <br/>
            <Link to="/foods">Foods</Link> 
            <br/>
            <Link to="/restaurants">Restaurants</Link>
            <hr />
          </>
        )
      }
    </header>
  )
}