import { createRoutesFromChildren } from "react-router";
import { createStore } from 'redux';
import initialState from 'db.json'


const reducer = (state = initialState, action) => {
    switch(action.type){
      case "REGISTER":
        return{
          ...state,
          users : [...state.users, action.payload]
        }
      case "LOGIN":
        return{
          ...state,
          user :action.payload
        }
      case "ADD_TO_FAVOURITES":
        return {
          ...state,
          favourites: [...state.favourites, action.payload],
        }
      default :
        return state;
    }
  }
  
  export default createStore(reducer)
  