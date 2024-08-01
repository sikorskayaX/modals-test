import React from 'react';
import classNames from 'classnames';

const Button = ({ text, ...props }) => {
    const buttonClasses = classNames('button', props.type);
    return (
        <button
        className={buttonClasses}
        onClick={props.onClick}
        disabled={props.disabled}
        {...props}
        >
        {text}
        </button>
  );
};

export default Button;
