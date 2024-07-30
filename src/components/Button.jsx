import React from 'react';

const Button = ({ onClick, type, text, disabled = false }) => {

    return (
      <>
        <button 
            className= {`"test__button" $(type)`}
            onClick={ onClick }
            disabled = {disabled}
        >
        {text}
        </button>
      </>
    )
  }
  
  export default Button