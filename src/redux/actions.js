// actions.js
import * as types from "./types";

export const setHandWashing = (usage) => ({
    type: types.SET_HAND_WASHING,
    payload: usage,
  });

export const setDishwasher = (usage) => ({
    type: types.SET_DISHWASHER,
    payload: usage,
});

export const setClothesWashing = (usage) => ({
    type: types.SET_CLOTHES_WASHING,
    payload: usage,
  });

export const setShower = (usage) => ({
  type: types.SET_SHOWER_USAGE,
  payload: usage,
});

export const setBath = (usage) => ({
  type: types.SET_BATH_USAGE,
  payload: usage,
});

export const setToilet = (usage) => ({
  type: types.SET_TOILET_USAGE,
  payload: usage,
});

export const setGarden = (usage) => ({
    type: types.SET_GARDEN,
    payload: usage,
  });

export const setTotal = (usage) => ({
    type: types.SET_TOTAL,
    payload: usage,
});

