import React from 'react';


const Slide = ({ question, inputType, options, min, max, value, onChange }) => {
  return (
    <section className="test-section">
      <p className="test-section__question">{question}</p>
      <div className="test-section__slide">
        {inputType === 'range' && (
          <form className="form-range">
            <label className="form-range__label"
              style={{ backgroundSize: `${(value - {min}) / ({max} - 1) * 100}%`}}>
              <input
                className="form-range__input"
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={onChange}
              />
              <div 
              className="form-range__label-value"
              ></div>
            </label>
            <div className='form-range__values'>
              <span>{min}</span>
              <span>{max}</span>
            </div>
          </form>
        )}
        {inputType === 'list' && (
              <select className="form-list">
                {options.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
        )}
        {inputType === 'checkbox' && (
          <form className="form-check">
            {options.map((option, index) => (
              <label key={index} className="form-check__label">
                <input className="form-check__input" type="checkbox" />
                <p className="form-check__label-text">{option}</p>
              </label>
            ))}
          </form>
        )}
      </div>
    </section>
  );
};

export default Slide;
