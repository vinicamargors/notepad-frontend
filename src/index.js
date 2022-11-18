import React from 'react';//importar react, para ele reconhecer o jsx, fazer o javascript entender html

import ReactDOM from 'react-dom';//importando ReactDOM, é usado para fazer aplicação web

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));//cria a root da div
root.render(<App/>);//renderiza a root da div na função app

//JSX