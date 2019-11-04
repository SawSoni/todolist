import { ADD_USER, GET_USERS_ASYNC, ADD_USER_DEMO_ASYNC } from './constants';

function userReducer(state = [], action){
    switch(action.type) {
        case ADD_USER:
        const newState = [...state, action.payload];
        return newState;

        case GET_USERS_ASYNC:
        console.log("user get data---------------",action.payload)
        return action.payload; 
        
        
        case ADD_USER_DEMO_ASYNC:
        console.log("add user data demo--------------------",action.payload);
        break;
        default:
    }
     return state;
}

export default userReducer

