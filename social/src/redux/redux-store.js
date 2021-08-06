import {combineReducers, createStore} from 'redux';
import dialogReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import navBarReducer from './navbar-reducer';

let reducers = combineReducers(
  {
    profilePage : profileReducer,
    messegePage : dialogReducer,
    navBar : navBarReducer,
  }
);
let store = createStore(reducers);

export default store;