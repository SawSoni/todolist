import { takeLatest,  put,  call, all} from 'redux-saga/effects';
import { getUserAsyc, addUserDemoAsync } from './actions';
import { GET_USERS, ADD_USER_DEMO } from './constants'
import axios from 'axios';
// import { request } from './serviceLayer'



const URL = "https://jsonplaceholder.typicode.com/users/";

function* getUsersData(){
    try{
        console.log("ATTEMPTING TO CALL API BY SAGA");
        const response = yield call(axios.get, URL , {});
        if(response.status === 200){
            console.log(response.data);
            yield put(getUserAsyc(response.data));
        }
    }
    catch(e){
        console.log(e);
    }
}

 export function* watchGetUsersData(){
    yield takeLatest(GET_USERS , getUsersData );
}

function* addUserData() {
    try{
        console.log('Doing post with use of user api');
        const response = yield call (axios.post, URL, {header:
             {
            'Accept-Charset':'UTF-8',
            'Content-Type':'application/json'
             }
            }, {"title": "foo",
            "body": "bar",
            "userId": 10})
            if(response.status === 201){
                console.log("*******************",response.data);
                yield put(addUserDemoAsync(response.data));
            }
    }catch(e){
        console.log(e);
    }
}

export function* watchAddUserDataDemo(){
    yield takeLatest( ADD_USER_DEMO, addUserData);
}

export default function* rootSaga(){
    yield all([
        watchGetUsersData(),
        watchAddUserDataDemo(),
    ])
}