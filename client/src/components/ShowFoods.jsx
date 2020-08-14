import React from 'react';
import { Link } from 'react-router-dom';
import { destroyFood } from '../services/foods';

export default function ShowFoods(props) {

  const handleClick = async (id) => {
    await destroyFood(id);
    props.setFoods(props.foods.filter((foodItem)=> {
      return foodItem.id !== id
    }))
  }

  return (
    <div>
      <h3>Foods</h3>
      {props.foods.map((foodItem) => (
        <>
          <Link to={`/foods/${foodItem.id}`} key={foodItem.id}>{foodItem.name}</Link>
          <br/>
          <img src={foodItem.image}></img>
          <br/>
          <Link to={`/foods/${foodItem.id}/edit`}><button>edit</button></Link>
          <br/>
          <button onClick={() => handleClick(foodItem.id)}>delete</button>
          <br />
        </>
      ))}
      <br/>
      <Link to='/foods/new'><button>Create</button></Link>
    </div>
  )
}