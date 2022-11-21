import React from 'react';

function Notes({data}){ //buscando nosso data do app.js
    return (
        <>
            <li id="1" className="notepad-infos">
              <div>
              <strong>{data.title/*vai buscar o registro title do nosso db*/}</strong>
                <div>
                  x
                </div>
              </div> 

              <textarea defaultValue={data.notes/*vai buscar o registro notes do nosso db*/}></textarea> 
              <span>!</span>
            </li>
        </>
    )
}


export default Notes