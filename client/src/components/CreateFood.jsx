import React, { useState } from 'react'
import { postFood } from '../services/foods';

export default function CreateFood(props) {
  const [formData, setFormData] = useState({
    name: ""
    
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFood = await postFood(formData);
    props.setFoods([
      ...props.foods,
      newFood
    ])
    props.history.push('/foods')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Food</h3>
      <label>
        Name:
        <input
          name='name'
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Review
        <input
          name='review'
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
  )
}