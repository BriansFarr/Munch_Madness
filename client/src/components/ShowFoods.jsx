import React from 'react';
import { Link } from 'react-router-dom';
import { destroyFood } from '../services/foods';
import '../component css/Show.css'

export default function ShowFoods(props) {

  const handleClick = async (id) => {
    await destroyFood(id);
    props.setFoods(props.foods.filter((foodItem)=> {
      return foodItem.id !== id
    }))
  }


  return (
    <div className="foods">
      <h3>Foods</h3>
      {props.foods.map((foodItem) => (
        <>
          <Link to={`/foods/${foodItem.id}`} key={foodItem.id}>{foodItem.name}</Link>
          <br/>
          <img src= {foodItem.image} width={500} height={300} mode='fit'></img>
          <br />
          <div className="edit">
          <Link to={`/foods/${foodItem.id}/edit`}><button>edit</button></Link>
          <br/>
          <button onClick={() => handleClick(foodItem.id)}>delete</button>
            <br />
            </div>
        </>
      ))}
      <div className= "create">
      <br/>
        <Link to='/foods/new'><button>Create</button></Link>
      </div>
    </div>
  )
}