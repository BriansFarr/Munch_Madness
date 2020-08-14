import React, { useState, useEffect } from 'react'
import { readOneFood, addRestaurant } from '../services/foods'

export default function FoodItem(props) {
  const [food, setFood] = useState(null);
  const [review, setReview] = useState(null);
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
  const handleDelete = async (e) => {
    
    
  }

  return (
    <div>
      {
        food && (
          <>
            <h3>{food.name}</h3>
            {food.review && 
              <p> {food.review}</p>}
            {food.image && 
              <img src={food.image}></img>}
            {food.restaurants &&
          
              food.restaurants.map((restaurant) => (
                <div>
                  <p key={restaurant.id}>{restaurant.name}</p>
                  <button onCLick={handleDelete}>Delete</button>
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
              <button>Add</button>
            </form>
          </>
        )
      }
    </div>
  )
}