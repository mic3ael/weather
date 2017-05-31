import {ConstActionTypes} from '../constants';

export default function(state = [], action) {

  switch (action.type) {
    case ConstActionTypes.FETCH_WEATHER:
      return [
        action.payload.data, ...state
      ];
  }

  return state;
}
