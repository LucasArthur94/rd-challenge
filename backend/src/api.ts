import axios from 'axios';

const SPACE_X_API = 'https://api.spacexdata.com/v5';

export const spaceXAPI = axios.create({
  baseURL: SPACE_X_API,
});
