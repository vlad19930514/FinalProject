
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {App} from '../shared/App.tsx'

window.addEventListener('load', ()=>{
    
    ReactDOM.hydrate(<App/>, document.getElementById('react_root'))

})

