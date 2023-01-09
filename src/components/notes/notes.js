import React, { useState } from 'react'; //instaciar o UseState, pq vai haver mudanças constantes com as atualizações do textarea
import { MdErrorOutline, MdCancel } from "react-icons/md"; //importando icones do react
import api from '../../services/api';
import './notes-priority.css';
import './notes.css'

function Notes({data, handleDelete, handleChangePriority}){ //buscando nosso data do app.js
    const [ changedNote, setChangedNote ] = useState('');

    async function handleSave(e, notes){
      e.style.cursor = 'default'; //quando eu salvar, vai voltar o cursor para default
      e.style.boxShadow = 'none'; 

      if (changedNote && changedNote != notes){
        await api.post(`/contents/${data._id}`, {
          notes : changedNote,
        });
      }; //vai verificar se changedNote é igual notes, se for diferente, ele vai acessar nossa rota de conteudos pelo id e substituir

    }; 

    function handleEdit(e, priority){
      e.style.cursor = 'text'; //quando eu clicar no textarea, meu cursor vai mudar pro text
      e.style.borderRadius = '5px';

      if (priority){
        e.style.boxShadow = '0 0 1px white'
      }else{
        e.style.boxShadow = '0 0 1px gray'
      }
    }


    return (
        <>
            <li id="1" className={data.priority ? "notepad-infos-priority" : "notepad-infos" /* vai verificar se a prioridade da anotação é true or false, mudando assim sequencialmente seus classnames */}> 
              <div>
              <strong>{data.title/*vai buscar o registro title do nosso db*/}</strong>
                <div>
                  <MdCancel 
                  size="24"
                  onClick={() => handleDelete(data._id)}
                  />
                </div>
              </div> 

              <textarea
                defaultValue={data.notes/*vai buscar o registro notes do nosso db*/}
                onClick={e => handleEdit(e.target, data.priority) /*vai dar uma animação diferente na hora que editarmos nossas notas*/}
                onChange={e => setChangedNote (e.target.value)/* vai comparar com o atual textarea, se estiver diferente, vai salvar no db*/ }
                onBlur={e => handleSave(e.target, data.notes)/* onBlur efetua a ação quando a gente desfoca de algum elemento */}
              />
              <span>
                <MdErrorOutline 
                size= "24"
                onClick={() => handleChangePriority(data._id)}
              /></span>
            </li>
        </>
    )
}


export default Notes