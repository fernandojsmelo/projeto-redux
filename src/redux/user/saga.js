
import {fetchUsersSucess, fetchUsersFailure} from './slice'
import { all, call, delay, put, takeEvery } from "redux-saga/effects";


import axios from 'axios';


function* fetchUsers(){
    try{
        yield delay(2000);
        
        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users/")
        yield put(fetchUsersSucess(response.data))

    }catch(error){
        yield put(fetchUsersFailure(error.message))
    }
}

export default all([
    takeEvery("user/fetchUsers", fetchUsers)
])