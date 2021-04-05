import { IAuth, IFetchUserAction } from './../actions/authActions';

import {ActionTypes} from './../actions/types'



export  const authReducer = (state:IAuth={} ,action:IFetchUserAction)=> {
    
    switch (action.type) {
        case ActionTypes.FETCH_USER:
            return action.payload || null
        default: 
            return state;
    }
}
