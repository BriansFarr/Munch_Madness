import React from 'react';
import { Link } from 'react-router-dom';
import { destroyFood } from '../services/foods';
import '../css/Show.css'

export default function ShowFoods(props) {

  const handleClick = async (id) => {
    await destroyFood(id);
    props.setFoods(props.foods.filter((foodItem)=> {
      return foodItem.id !== id
    }))
  }


  return (
    <div className="container">
      <div className="edit">
      <h3>Foods</h3>
      <div className= "create">
        <Link to='/foods/new'><button>Create</button></Link>
      </div>
      {props.foods.map((foodItem) => (
      
          <div className="foodCard">
          <Link to={`/foods/${foodItem.id}`} key={foodItem.id}>{foodItem.name}</Link>
          <br/>
          <img src= {foodItem.image} width={250} height={200} mode='fit'></img>
          <br />
            <div className="main">
              <div className="edit">
                <Link to={`/foods/${foodItem.id}/edit`}><button>edit</button></Link>
                </div>
              <div className="delete">
                <button onClick={() => handleClick(foodItem.id)}>delete</button>
                </div>
            <br />
            </div>
            </div>
        
        
      ))}
        </div>
    </div>
  )
}