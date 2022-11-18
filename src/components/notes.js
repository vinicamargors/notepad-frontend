import React from 'react';

function Notes(){
    return (
        <>
            <li id="1" className="notepad-infos">
              <div>
              <strong>Fazer Compras</strong>
                <div>
                  x
                </div>
              </div>

              <textarea defaultValue={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}></textarea>
              <span>!</span>
            </li>
        </>
    )
}


export default Notes