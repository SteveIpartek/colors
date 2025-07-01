import React from 'react';

const BoxColor = React.forwardRef(({ color, inputValue }, ref) => {
  const isMatch = inputValue.toLowerCase() === color;

  // Creamos un objeto de estilo. Si hay coincidencia, el color del texto será negro.
  // Si no, el objeto estará vacío y se usará el color de la hoja de estilos CSS.
  const textStyle = {
    color: isMatch ? 'black' : ''
  };

  return (
    <div ref={ref} className={`box ${color}`}>
      {/* Aplicamos el estilo condicional al párrafo */}
      <p style={textStyle}>
        {isMatch 
          ? `Yes, I´m ${color} color` 
          : `I´m not a ${inputValue || '...'} color`}
      </p>
    </div>
  );
});

export default BoxColor;