import React from 'react';
import EmployeeInputRange from './EmployeeInputRange';
import ActivitiesList from './ActivitiesList';
import SourcesCheckbox from './SourcesCheckbox';

const Slide = ({ inputType, ...props}) => {
  return (
    <section className="slide">
      <p className="slide__question">{props.question}</p>
      {inputType === 'range' && (<EmployeeInputRange {...props}/>)}
      {inputType === 'list' && (<ActivitiesList {...props}/>)}
      {inputType === 'checkbox' && (<SourcesCheckbox {...props}/>)}
    </section>
  );
};

export default Slide;
