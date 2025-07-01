

import React, { useState, useRef, useEffect } from 'react';
import BoxColor from './BoxColor';

const MyFormChallenge = () => {
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];
  
  // Estado para guardar el valor del input.
  const [inputValue, setInputValue] = useState('');

  // Ref para almacenar las referencias a cada elemento DOM de BoxColor.
  // useRef([]) inicializa la ref con un array vacío.
  const boxRefs = useRef([]);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);

    // Iteramos sobre las referencias guardadas.
    boxRefs.current.forEach(boxRef => {
      // boxRef es el elemento del DOM (el div).
      // Comprobamos si la lista de clases del div contiene el color escrito.
      if (boxRef.classList.contains(value)) {
        // Si coincide, aplicamos el color de fondo.
        boxRef.style.backgroundColor = value;
      } else {
        // Si no, lo dejamos transparente para que use el estilo por defecto.
        boxRef.style.backgroundColor = 'transparent';
      }
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="colorInput">Write a color</label>
        <br />
        <input
          id="colorInput"
          type="text"
          placeholder="e.g., red, green..."
          value={inputValue}
          onChange={handleChange}
        />
      </form>

      <div className="boxes-container">
        {colors.map((color, index) => (
          <BoxColor
            key={color}
            color={color}
            inputValue={inputValue}
            // Asignamos la referencia de cada elemento al array en boxRefs.current.
            // Esto se llama "callback ref".
            ref={el => boxRefs.current[index] = el}
          />
        ))}
      </div>
    </div>
  );
};

export default MyFormChallenge;