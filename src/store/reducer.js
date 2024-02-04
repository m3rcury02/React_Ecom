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
        case "REMOVE_FROM_FAVOURITES":
          return {
            ...state,
            favourites: state.favourites.filter(product => product.id !== action.payload.id),
          }
        default :
          return state;
      }
    
  }
  
  export default createStore(reducer)
  