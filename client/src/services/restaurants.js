import api from './api-helper';

export const readAllRestaurants = async () => {
  const resp = await api.get('/restaurants');
  return resp.data;
}

export const destroyRestaurant = async (id) => {
  const resp = await api.delete(`/restaurants/${id}`);
  return resp;
}