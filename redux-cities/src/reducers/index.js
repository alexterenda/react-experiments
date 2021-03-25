import { combineReducers } from "redux";
import CitiesReducer from "./cities_reducer.js";
import ActiveCityReducer from "./active_city_reducer.js";

const rootReducer = combineReducers({
  cities: CitiesReducer,
  activeCity: ActiveCityReducer,
});

export default rootReducer;
