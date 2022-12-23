import './style.css'
import React from './MyReact'
import App  from './components/App'


const rootElem = document.querySelector('#app')
React.render(React.createElement(App), rootElem)
