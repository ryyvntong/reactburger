import * as actionTypes from '../actions/actionsTypes'
import {updateObject } from '../utility';
const initialState={
    ingredients:null,
    totalPrice:3,
    error:false,
    building:false
};

const INGREDIENT_PRICE={
    onion: 0.5,
    lettuce: 0.5,
    cheese: 0.75,
    meat: 1.5,
    bacon: 0.75
};

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredient={[action.ingredientName]:state.ingredients[action.ingredientName]+1}
            const updatedIngredients=updateObject(state.ingredients,updatedIngredient);
            const updatedState={
                ingredients:updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName],
                building:true
            }
            return updateObject(state,updatedState);
        case actionTypes.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName]-1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientName],
                building:true

            };
        case actionTypes.SET_INGREDIENTS:
            return{
                ...state,
                ingredients: {
                    onion: action.ingredients.onion,
                    lettuce: action.ingredients.lettuce,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                totalPrice:3,
                error:false,
                building:false
            };
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return{
                ...state,
                error:true
            }
        default:
            return state;

    }
}

export default reducer;