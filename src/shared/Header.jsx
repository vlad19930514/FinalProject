import {hot} from 'react-hot-loader/root'
import * as React from 'react'
import styles from './header.css'
 function HeaderComponent() {
    return (
        <div className={styles.example}>
            Hello worldddd21fs1d2
        </div>
       
    )
}


export  const Header = hot(()=>  <HeaderComponent/>)