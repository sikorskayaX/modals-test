import React from 'react';

const ActivitiesList = ({options}) =>{	
	return(
		<select className="form-list">
		  {options?.map((option, index) => (
			<option key={index} value={option}>{option}</option>
		  ))}
		</select>
	)
}

export default ActivitiesList;

