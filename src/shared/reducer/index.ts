
import { IAuth } from '../actions/authActions'
import { authReducer } from './authReducer'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

export type RootState = ReturnType<typeof reducers>
const initialState ={
    
}
const middleware = [thunk]

export const reducers = combineReducers({
auth:authReducer
})

const store = createStore(reducers, initialState, composeWithDevTools 
    (applyMiddleware(...middleware)))
    
    export default store