import {MEALS} from '../../data/data';

const initialState = {
  meals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  return state;
};

export default mealsReducer;
