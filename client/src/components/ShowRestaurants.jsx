import React from 'react'

export default function ShowRestaurants(props) {
  return (
    <div>
      <h3>Restaurants</h3>
      {props.restaurants.map((restaurant)=>(
        <p>{restaurant.name}</p>
      ))}
    </div>
  )
}