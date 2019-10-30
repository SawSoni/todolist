import { ADD_USER } from './constants';

function userReducer(state = [], payload){
    switch(payload.type) {
        case ADD_USER:
        const newState = [...state, payload.payload];
        return newState;
        break;
    default:
    }
    return state;
}

export default userReducer

