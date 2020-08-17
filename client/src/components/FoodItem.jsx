import React, { useState, useEffect } from 'react'
import { readOneFood, addRestaurant } from '../services/foods'
import { destroyRestaurants} from '../services/restaurants'
import "../css/FoodItem.css"



export default function FoodItem(props) {
  const [food, setFood] = useState(null);
  const [restaurantId, setRestaurantId] = useState(null);

  useEffect(() => {
    getFoodItem()
  }, [])

  const getFoodItem = async () => {
    const foodItem = await readOneFood(props.match.params.id)
    console.log(foodItem)
    setFood(foodItem)

  }

  const handleChange = (e) => {
    const { value } = e.target;
    setRestaurantId(value);
  }

  const handleSubmit = async (e)=> {
    e.preventDefault();
    const foodItem = await addRestaurant(restaurantId, food.id);
    setFood(foodItem);
  }


  const handleClick = async (e) => {
    await destroyRestaurants();
    
  }

  return (
    <div className="food">
      {
        food && (
          <>
            <h1>Food:</h1>
            <h2>{food.name}</h2>
            {food.review && 
              <p> Review: "{food.review}" </p>}
            {food.image && 
              <img className="foodImage" src={food.image} ></img>}
            <h3>Select the restaurant with the best {food.name}:</h3>
            
            {food.restaurants &&
              food.restaurants.map((restaurant) => (
                <div>
                  <p key={restaurant.id}>{restaurant.name}<img src={restaurant.image} width={500} height={300} mode='fit'></img></p>
                  
                  <button onCLick={handleClick}>Delete</button>
                </div>
              ))
            }

          
              

            <form onSubmit={handleSubmit}>
              <select onChange={handleChange}>
                <option selected disabled>-- Select a restaurant --</option>
                {props.restaurants.map((restaurant) => (
                  <option value={restaurant.id}>{restaurant.name}</option>
                  
                ))}
              </select>
              <button onClick>Add</button>
              
            </form>
            
          </>
          
        )
      }
    </div>
  )
}