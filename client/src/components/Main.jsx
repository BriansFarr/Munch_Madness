import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom';
import { readAllRestaurants } from '../services/restaurants';
import { readAllFoods } from '../services/foods';
import '../css/Main.css' 

import Login from './Login';
import Register from './Register';
import ShowRestaurants from './ShowRestaurants';
import ShowFoods from './ShowFoods';
import CreateFood from './CreateFood';
import FoodItem from './FoodItem'
import UpdateFood from './UpdateFood';
import Home from './Home';
import Reviews from './Reviews';

export default function Main(props) {
  const { setCurrentUser } = props;

  const [restaurants, setRestaurants] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getRestaurants();
    getFoods();
  }, [])

  const getRestaurants = async () => {
    const restaurantList = await readAllRestaurants();
    setRestaurants(restaurantList);
  }

  const getFoods = async () => {
    const foodsList = await readAllFoods();
    setFoods(foodsList);
  }
  
  return (
    <main>

      <Route path='/home' render={() => (
        <Home
          home={Home}
        />
      )} />
      <Route path='/login' render={(props) => (
        <Login
          {...props}
          setCurrentUser={setCurrentUser}
        />
      )} />
      <Route path='/register' render={(props) => (
        <Register
          {...props}
          setCurrentUser={setCurrentUser}
        />
      )} />
      <Route path='/restaurants' render={() => (
        <ShowRestaurants
          restaurants={restaurants}
        />
      )} />
      <Route exact path='/foods' render={() => (
        <ShowFoods
          foods={foods}
          setFoods={setFoods}
        />
      )} />
      <Route path='/foods/new' render={(props) => (
        <CreateFood
          {...props}
          setFoods={setFoods}
          foods={foods}
        />
      )} />
      <Route exact path='/foods/:id' render={(props) => (
        <FoodItem
          {...props}
          restaurants={restaurants}
        />
      )} />
      <Route path='/foods/:id/edit' render={(props) => (
        <UpdateFood
          {...props}
          foods={foods}
          setFoods={setFoods}
        />
      )} />
      <Route path='/reviews' render={() => (
        <Reviews
          reviews={Reviews}
        />
      )} />

      
    </main>
  )
}