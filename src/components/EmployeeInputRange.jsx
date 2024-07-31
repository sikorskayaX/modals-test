import React, { useState } from 'react';

const EmployeeInputRange = ({minEmployeeCount, maxEmployeeCount}) =>{
	const [employeeCount, setEmployeeCount] = useState(1);

	const handleEmployeeCountChange = (event) => {
		setEmployeeCount(event.target.value);
	};
	
	return(			
			<form className="form-range">
			  <label className="form-range__label"
				//style={{ backgroundSize: `${(employeeCount - {minEmployeeCount}) / ({maxEmployeeCount} - 100) * 100}%`}}
				>
				<input
				  className="form-range__input"
				  type="range"
				  min= {minEmployeeCount}
				  max={maxEmployeeCount}
				  value={employeeCount}
				  onChange={handleEmployeeCountChange}
				/>
				<div 
				className="form-range__label-value"
				></div>
			  </label>
			  <div className='form-range__values'>
				<span>{minEmployeeCount}</span>
				<span>{maxEmployeeCount}</span>
			  </div>
			</form>
	)
}

export default EmployeeInputRange;