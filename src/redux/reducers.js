// reducers.js
import * as types from "./types";

const initialState = {
    handWashing: 0,
    dishwasher: 0,
    clothesWashing: 0,
    shower: 0,
    bath: 0,
    toilet: 0,
    garden: 0,
    total: 0
  // ... other water usage properties
};

const waterUsageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_HAND_WASHING:
        return { ...state, handWashing: action.payload };
    case types.SET_DISHWASHER:
        return { ...state, dishwasher: action.payload };
    case types.SET_CLOTHES_WASHING:
        return { ...state, clothesWashing: action.payload };
    case types.SET_SHOWER_USAGE:
        return { ...state, shower: action.payload };
    case types.SET_BATH_USAGE:
        return { ...state, bath: action.payload };
    case types.SET_TOILET_USAGE:
        return { ...state, toilet: action.payload };
    case types.SET_GARDEN:
        return { ...state, garden: action.payload };
    case types.SET_TOTAL:
        return { ...state, total: action.payload };
    default:
      return state;
  }
};

export default waterUsageReducer;
