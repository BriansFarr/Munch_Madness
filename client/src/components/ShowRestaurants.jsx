import React from 'react'
import "../css/ShowRest.css"


export default function ShowRestaurants(props) {
  return (
    <div className="rest">
      <h1>Restaurants</h1>
      {props.restaurants.map((restaurant) => (
        <>
          <div className="restInfo">
        {/* <p>{restaurant.name}</p> */}
            <img src={restaurant.image} width={250} height={175} mode='fit'></img>
            <br />
            <div className="link-btn">
              <a href="https://www.bk.com/menu"> Menu</a> <button>Favorites</button><button>Order Now</button>
              </div>
          </div>
          </>
      ))}
    </div>
  )
}