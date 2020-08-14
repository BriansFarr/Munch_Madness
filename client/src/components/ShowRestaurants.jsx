import React from 'react'

export default function ShowRestaurants(props) {
  return (
    <div>
      <h3>Restaurants</h3>
      {props.restaurants.map((restaurant) => (
        <>
        <p>{restaurant.name}</p>
          <img src={restaurant.image} width={500} height={300} mode='fit'></img>
          
          </>
      ))}
    </div>
  )
}