import {cities} from "./citiesReducer";
import {sources} from "./sources";
import {combineReducers, createStore} from "redux";
import {userInfo} from "./userInfoReducer";

const reducers = combineReducers({cities, sources, userInfo});
const store = createStore(reducers);
export default store;