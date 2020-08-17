import React, { useState, useEffect } from 'react'
import { putFood } from '../services/foods'
import "../css/Update.css"

export default function UpdateFood(props) {
  const [formData, setFormData] = useState({
    name: ""
  })

  useEffect(() => {
    defaultFormData()
  }, [props.foods])

  const defaultFormData = () => {

    const foodItem = props.foods.find((food) => {
      return food.id === parseInt(props.match.params.id)
    })
    if (foodItem) {
      setFormData({ name: foodItem.name, review: foodItem.review })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {id} = props.match.params;
    const newFood = await putFood(id, formData);
    props.setFoods(
      props.foods.map((foodItem) => {
        return foodItem.id === parseInt(id) ? newFood : foodItem
      })
    )
    props.history.push('/foods')
  }

  return (
    <>
    <div className="update">
    <form onSubmit={handleSubmit}>
      <h3>Edit Food</h3>
      <label>
        Name:
        <input
          name="food"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        Review:
        <input
          name="review"
          type="text"
          value={formData.review}
          onChange={handleChange}
        />
      </label>
      <label>
        Image
        <input
          name='image'
          type="text"
          value={formData.image}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
        </form>
        </div>
      </>
  )
}