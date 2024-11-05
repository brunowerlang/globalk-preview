import React from 'react';

const Button = ({ styles, text }) => {
  return (
    <button 
      type='button' 
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-gradient outline-none border-2 border-red-500 rounded-[10px] ${styles}`}
    >
      {text} {/* Renderiza o texto passado como prop */}
    </button>
  );
}

export default Button;
