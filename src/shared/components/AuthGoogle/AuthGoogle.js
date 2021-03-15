import React,{useEffect} from 'react'


import {useDispatch, useSelector} from 'react-redux'

import {fetchUser} from '../../actions/authActions'
import {BrowserRouter, Link, NavLink, Route} from 'react-router-dom'
const AuthGoogle = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchUser())
   },[dispatch])
 
  const auth = useSelector((state)=>state.auth)

  const renderContent=()=>{
    switch (auth) {
        case null:
            return 'still deciding1';
            case false:
                return <a href="/auth/google" className="App-link">Войти через Google</a>;
            default:
                return <div>
                     
               Вы зашли как {auth.name}. 
                <br/>
                
                
                <a href="/auth/logout" className="App-link">Хотите выйти?</a>
                
                 </div> ;
    }
}
    return (
        <div>
 { renderContent() }


        </div>
    )
}

export default AuthGoogle

  

    
      
   


      