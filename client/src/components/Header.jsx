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
      <div className= 'user'>
      {
        props.currentUser ? (
          <>
              <p>{props.currentUser.username}</p>
              <div className='button'>
                <button onClick={handleLogout}>Logout</button>
                </div>
          </>
        ) : (
            <Link to='/login'>Login / Sign Up</Link>
           
          )
      }
      </div>
      <div className="nav">
        {
        props.currentUser && (
          <>
          
            <Link to='/home'>Home</Link>
           
            <Link to="/foods">Foods</Link> 
       
            <Link to="/restaurants">Restaurants</Link>
          </>
        )
        }
        </div>
    </header>
  )
}