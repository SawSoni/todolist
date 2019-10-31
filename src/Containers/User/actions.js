import { ADD_USER, GET_USERS, GET_USERS_ASYNC, ADD_USER_DEMO, ADD_USER_DEMO_ASYNC  } from "./constants"


export function addUser(payload) {
    return { type: ADD_USER, payload }
}

export function getUsers() {
    return { type: GET_USERS}
}

export function getUserAsyc(payload){
    return { type: GET_USERS_ASYNC, payload}
}

export function addUserDemo(payload) {
    return { type: ADD_USER_DEMO, payload}
}

export function addUserDemoAsync(payload){

    return{ type: ADD_USER_DEMO_ASYNC, payload}
}