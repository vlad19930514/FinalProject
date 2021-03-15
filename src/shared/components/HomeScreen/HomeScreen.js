import React,{useEffect} from 'react'



import {BrowserRouter, Link, NavLink, Route} from 'react-router-dom'
import AuthGoogle from '../AuthGoogle/AuthGoogle'

const HomeScreen = () => {

    return (
        <div>
<NavLink to="/menu" activeClassName="selected">
                                menu
                            </NavLink>
                            <br></br>
                            <NavLink to="/menu" activeClassName="selected">
                               редактор слов
                            </NavLink>
                            <AuthGoogle></AuthGoogle>
        </div>
    )
}

export default HomeScreen

  

    
      
   


      