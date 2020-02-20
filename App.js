import React, { useState } from 'react';

import {AppNavigation} from './navigation/AppNavigation';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import mealsReducer from './store/reducers/meals';

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function HelloWorldApp() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
