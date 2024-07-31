import React from 'react';

const SourcesCheckbox = ({options}) =>{	
	return(
		<form className="form-check">
		  {options?.map((option, index) => (
			<label key={index} className="form-check__label">
			  <input className="form-check__input" type="checkbox" />
			  <p className="form-check__label-text">{option}</p>
			</label>
		  ))}
		</form>
	  )
}

export default SourcesCheckbox;