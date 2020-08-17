import React from 'react'
import "../css/ShowRest.css"


export default function ShowRestaurants(props) {
  return (
    <div className="rest">
      <h3>Restaurants</h3>
      {props.restaurants.map((restaurant) => (
        <>
          <div className="restInfo">
        <p>{restaurant.name}</p>
          <img src={restaurant.image} width={250} height={175} mode='fit'></img>
          </div>
          </>
      ))}
    </div>
  )
}