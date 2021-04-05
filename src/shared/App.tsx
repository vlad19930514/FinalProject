import {hot} from 'react-hot-loader/root'
import * as React from 'react'
import styles from './app.css'

import { Provider } from 'react-redux'

import {BrowserRouter, Link, NavLink, Route} from 'react-router-dom'

import HomeScreen from './components/HomeScreen/HomeScreen'
import store from './reducer/index'
import { useEffect, useState } from 'react'
import AuthGoogle from './components/AuthGoogle/AuthGoogle'
import Words from './components/HomeScreen/Words/Words'
import Trainings from './components/HomeScreen/Words/Trainings/Trainings'
import EditWords from './components/HomeScreen/Words/EditWords/EditWords'
import Profile from './components/HomeScreen/Profile/Profile'
import Grammar from './components/HomeScreen/Grammar/Grammar'






 function AppComponent() {
     const [mounted, setMounted] = useState(false)
     useEffect(() => {
         setMounted(true)
         
         
     }, [])
    return (
        <Provider store={store}>

            {mounted && (
                         <BrowserRouter>

                            <AuthGoogle/>
                            <NavLink to="/profile" activeClassName="selected">
                       Профайл
                            </NavLink>
                            <HomeScreen/>
                            
                            
                            <Route path="/words" component={Words} exact />
                            <Route path="/editwords" component={EditWords} exact />
                            <Route path="/trainings" component={Trainings} exact />
                            <Route path="/profile" component={Profile} exact />
                            <Route path="/grammar" component={Grammar} exact />
                            
                        </BrowserRouter>

            )}
            

        </Provider>
        
       
    )
}


export  const App = hot(()=>  <AppComponent/>)