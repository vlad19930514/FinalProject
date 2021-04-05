import React,{useEffect} from 'react'

import {useDispatch} from 'react-redux'

import {fetchUser, IAuth} from '../../actions/authActions'


import { useTypedSelector } from '../../hooks/useTypedSelector'


const AuthGoogle:React.FC = () => {

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchUser())
   },[dispatch])
  
   const auth = useTypedSelector((state)=>state.auth)

  const renderContent=()=>{
    switch (auth) {
        
            case null:
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

  

    
      
   


      