import React from 'react';
import { titulo } from './assets/titulo'
function Titulo() {
const texto=titulo[0].texto; 
  const descrip=titulo[0].descrip;

    return ( 
        <>
        <h1>{texto}</h1>
      <h3>{descrip}</h3>
        </>
     );
}

export default Titulo;