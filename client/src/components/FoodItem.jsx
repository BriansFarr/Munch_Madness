import React, { useState, useEffect } from 'react'
import { readOneFood, addRestaurant } from '../services/foods'
// import { destroyRestaurants} from '../services/restaurants'
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


  // const handleClick = async (e) => {
  //   await destroyRestaurants();
    
  // }

  return (
    <div className="food">
      {
        food && (
          <>
            <div className="foodBox">
              <h1>{food.name}</h1>
            </div>
            <div className="reviewBox">
              <h2>Review:</h2>
              {food.review && 
                <p> "{food.review}" </p>}
              </div>
            {food.image && 
              <img className="foodImage" src={food.image} ></img>}
            <div className="restBox"></div>
            <h3>Save to restaurant favorites:</h3>
            <div className="selectRest">
            <form onSubmit={handleSubmit}>
              <select onChange={handleChange}>
                <option selected disabled>-- Select a restaurant --</option>
                {props.restaurants.map((restaurant) => (
                  <option value={restaurant.id}>{restaurant.name}</option> 
                ))}
              </select>
                <button onClick>Add</button>
              </form>
              </div>
            
            <div className="foodImage">
            {food.restaurants &&
              food.restaurants.map((restaurant) => (
                  <p key={restaurant.id}><img src={restaurant.image} width={250} height={150} mode='fit'></img></p>
                  ))
                }
                </div>
          </>
        )
      }
    </div>
  )
}