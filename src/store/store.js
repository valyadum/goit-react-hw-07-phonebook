import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { contactReducer } from './contactSlice';
import { filterReducer } from "./filterSlice";


const reducer = combineReducers({
    contacts: contactReducer,
    filter: filterReducer,
})


export const store = configureStore({
    reducer:reducer,
})
