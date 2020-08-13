import api from './api-helper';

export const readAllFoods = async () => {
  const resp = await api.get('/foods');
  return resp.data;
}

export const readOneFood = async (id) => {
  const resp = await api.get(`/foods/${id}`);
  return resp.data;
}

export const postFood = async (foodData) => {
  const resp = await api.post('/foods', { food: foodData });
  return resp.data;
}

export const putFood = async (id, foodData) => {
  const resp = await api.put(`/foods/${id}`, { food: foodData });
  return resp.data;
}

export const destroyFood = async (id) => {
  const resp = await api.delete(`/foods/${id}`);
  return resp;
}

export const addRestaurant = async(restaurantId, foodId) => {
  const resp = await api.put(`/restaurants/${restaurantId}/foods/${foodId}`);
  return resp.data;
}