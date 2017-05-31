import {ConstActionTypes, ConstValues} from '../constants';
import axios from 'axios';

export function fetchWeather(city) {
  const url = `${ConstValues.ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {type: ConstActionTypes.FETCH_WEATHER, payload: request};
}
