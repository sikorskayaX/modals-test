import React from 'react';
import EmployeeInputRange from './EmployeeInputRange';
import ActivitiesList from './ActivitiesList';
import SourcesCheckbox from './SourcesCheckbox';

const Slide = ({ inputType, ...props}) => {
  return (
    <section className="test-section">
      <p className="test-section__question">{props.question}</p>
      <div className="test-section__slide">
        {inputType === 'range' && (<EmployeeInputRange {...props}/>)}
        {inputType === 'list' && (<ActivitiesList {...props}/>)}
        {inputType === 'checkbox' && (<SourcesCheckbox {...props}/>)}
      </div>
    </section>
  );
};

export default Slide;
