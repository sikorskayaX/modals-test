import React from 'react';

const Slide = ({ question, inputType, options, min, max, value, onChange }) => {
  return (
    <section className="test-section">
      <div className="test-section__slide">
        <p className="test-section__question">{question}</p>
        {inputType === 'range' && (
          <form className="form-range">
            <label className="form-range__label">
              <input
                className="form-range__input"
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={onChange}
              />
              <div className="form-range__label-value">{value}</div>
            </label>
          </form>
        )}
        {inputType === 'list' && (
          <form className="form-list">
            <label className="form-list__label">
              <select>
                {options.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </label>
          </form>
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
