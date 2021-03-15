import {hot} from 'react-hot-loader/root'
import * as React from 'react'
import styles from './app.css'

import { Provider } from 'react-redux'

import {BrowserRouter, Link, NavLink, Route} from 'react-router-dom'
import EditWords from './EditWords/EditWords'
import HomeScreen from './components/HomeScreen/HomeScreen'
import store from './store'
import { useEffect, useState } from 'react'
import AuthGoogle from './components/AuthGoogle/AuthGoogle'






 function AppComponent() {
     const [mounted, setMounted] = useState(false)
     useEffect(() => {
         setMounted(true)
         
         
     }, [])
    return (
        <Provider store={store}>

            {mounted && (
                         <BrowserRouter>

                            <HomeScreen/>
                            
                            <Route path="/menu" component={AuthGoogle} />
                            
                        </BrowserRouter>

            )}
            

        </Provider>
        
       
    )
}


export  const App = hot(()=>  <AppComponent/>)