import React from 'react';
import { Link } from 'react-router-dom';
import { removeToken } from '../services/auth';
import { useHistory } from 'react-router-dom';
import '../css/Header.css'
import munch from '../png/munch.png'

export default function Header(props) {
  const history = useHistory();

  const handleLogout = () => {
    props.setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push('/home');
  }

  return (
    <header>
      <div className= "title">
    <img src={munch}></img>
      </div>
      <div className= 'user'>
      {
        props.currentUser ? (
            <>
              <div className="menuUser">
                <p>{props.currentUser.username}</p>
                </div>
              <div className='button'>
                <button onClick={handleLogout}>Logout</button>
                </div>
          </>
        ) : (
            <Link to='/login'>Login / Sign Up</Link>
           
          )
      }
      </div>
      <div className="topNav">
        {
          props.currentUser && (
            <>
            <Link to='/home'>Home</Link>
           
            <Link to="/foods">Foods</Link> 
            
            <Link to="/restaurants">Restaurants</Link>
              
            <Link to="/reviews">Reviews</Link>
          
            
            <div className="notification">
              <div><Link to='/comp'>Competitions</Link></div>
              <div className='badge'>4</div>
            </div>
            <div className="navLogo"><img src={munch} height="50" ></img></div>
          </>
        )
        
        }
      </div>
    </header>
  )
}