import api from './api-helper';

export const readAllRestaurants = async () => {
  const resp = await api.get('/restaurants');
  return resp.data;
}