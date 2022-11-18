import React, {useState, useEffect} from 'react';//useEffect, faz a função ser rodada somente uma vez a cada construção do aplicativo

import api from './services/api.js'

import './main.css'
import './app.css'
import './global.css'
import './sidebar.css'

//componente -> estrutura de código que retorna algo, pode ser um html, css ou um js
//propriedades -> são informações que um componente pai, passa para um componente filho
//estado -> Função que armazena uma informação e manipula ela, preciso declarar {use}

import Notes from './components/notes.js'

function App(){

  const [title, setTitles] = useState('');
  const [notes, setNotes] = useState('');
  const [allNotes, setAllNotes] = useState('');

  useEffect(() =>{
    async function getAllNotes(){
      
      const response = await api.get('/annotations',);

    }
  },[]);

  async function handleSubmit(e){//função assincrona para não interferir no resto do nosso código
    e.preventDefault();//para ele não fazer o evento padrão de enviar o form submit para outra pagina

    const response = await api.post('/annotations',{//função post pq ele vai criar esse registro
      title, 
      notes,
      priority: false
    } ) 

    setTitles('')
    setNotes('')
  }

  return(
    <div id="app">
        <aside>
          <strong>Caderno de Notas</strong>
          <form onSubmit={handleSubmit}>

            <div className="input-block">
              <label htmlFor="title">Titulo da anotação</label>
              <input
                required
                value={title}//define valor do input como title do useState
                onChange={e => setTitles(e.target.value)}//para prevenir evento, falando que oq vai manipular nosso title é o setTitles
              />
            </div>

            <div className="input-block">
              <label htmlFor="nota">Anotações</label>
              <textarea
                required
                value={notes}//define valor do textarea como notes do useState
                onChange={e => setNotes(e.target.value)}//para prevenir evento, falando que oq vai manipular nosso notes é o setNotes
              />
            </div>

            <button type="submit">Salvar</button>

          </form>
        </aside>
        <main>
          <ul>
            
            <Notes/>
          </ul>
        </main>
    </div>
  )
  ;//tag vazia para identar melhor o codigo
}

export default App;//tá exportando essa função para ser usada em outro arquivo de código
