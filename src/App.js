import React, {useState, useEffect} from 'react';

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
  const [allNotes, setAllNotes] = useState([]);//inicia ele como um array, pq ele é um array de informações 

  useEffect(() =>{//useEffect, faz a função ser rodada somente uma vez a cada construção do aplicativo
    async function getAllNotes(){
      
      const response = await api.get('/annotations',);//rota das anotações

      setAllNotes(response.data);//onde vai estar armazenado todas as minhas informações do title e do notes 
    }
    getAllNotes()//vai estar executando nossa função
  },[]);

  async function handleSubmit(e){//função assincrona para não interferir no resto do nosso código
    e.preventDefault();//para ele não fazer o evento padrão de enviar o form submit para outra pagina

    const response = await api.post('/annotations',{//função post pq ele vai criar esse registro
      title, 
      notes,
      priority: false //vai vir padrão como falso
    } ) 

    setTitles('')//limpar os inputs depois da inserção, toda vez que enviar, vai limpar
    setNotes('')

    setAllNotes([...allNotes.response.data])//setar de forma automatica nossa listagem de notas, sem precisar dar f5 na pag
    //vai atualizar nosso allNotes com o proprio data dele
  }

  useEffect(() => {//estrutura do useEffect recebe função do primeiro paramentro, seguido de um array de dependencias
    function enableSubmitButton(){ //essa vai função vai habilitar o destaque (hover) do botão quando estiver disponivel para salvar o registro
    let /*let pq vai ser uma variavel manipulavel*/ btnSave = document.getElementById('btn_submit')
    btnSave.style.background = '#D8A2F8' 
    if(title && notes){
      btnSave.style.background = '#a453d3'
    }
  }
  enableSubmitButton()
  },[title,notes]) //a dependencia dela, que depende do meu title e notes estarem inseridos de uma info


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

            <button id="btn_submit" type="submit">Salvar</button>

          </form>
        </aside>
        <main>
          <ul>
            {allNotes.map(data => (//maps percorre todo meu allNotes, no meu data do allNotes
              <Notes data={data}/>//passando o data para nosso componente poder usar
            ))}
            
          </ul>
        </main>
    </div>
  )

}

export default App;//tá exportando essa função para ser usada em outro arquivo de código
