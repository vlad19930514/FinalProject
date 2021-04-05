import axios from 'axios'

import {Dispatch} from 'redux'
import {ActionTypes} from './types'


export interface IAuth {
    name?:string;
    email?:string;
    googleId?:number |string;
    MainWords?:
        [
            {
                word:string;
                translate:string;
                transcription:string;
                _id:string;
            }
        ]

}
export interface IFetchUserAction {
    type: ActionTypes.FETCH_USER;
    payload: IAuth 
}

    export const fetchUser = () =>  async (dispatch:Dispatch) => {
        const res = await axios.get<IAuth>('/auth/current_user')
       
        
        dispatch<IFetchUserAction>({type: ActionTypes.FETCH_USER, payload:  res.data})
        
    }
  
