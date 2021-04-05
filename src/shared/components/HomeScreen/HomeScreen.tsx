import React,{useEffect} from 'react'



import {BrowserRouter, Link, NavLink, Route} from 'react-router-dom'


const HomeScreen = () => {

    return (
        <div>
            <NavLink to="/words" activeClassName="selected">
                       Словарь
            </NavLink>
            <NavLink to="/grammar" activeClassName="selected">
                       Грамматика
            </NavLink>
           
            <div> Красивая картинка на десктопе</div>
            
            
                            
                            
                            
        </div>
    )
}

export default HomeScreen

  

    
      
   


      