import React, { useState } from 'react';

const EmployeeInputRange = ({minEmployeeCount, maxEmployeeCount}) =>{
	const [employeeCount, setEmployeeCount] = useState(1); 

	const handleEmployeeCountChange = (event) => {
		setEmployeeCount(event.target.value);
	};

	const progressPercentage = ((employeeCount - 1) / (maxEmployeeCount - 1)) * 100;

	return(			
			<form className="form-range">
				<input
				  className="form-range__input"
				  type="range"
				  min= {minEmployeeCount}
				  max={maxEmployeeCount}
				  value={employeeCount}
				  onChange={handleEmployeeCountChange}
				  style={{
					background: `linear-gradient(to right, #9FC136 ${progressPercentage}%, #D9D9D9 ${progressPercentage}%)`
				  }}
				/>
				<div 
					className="form-range__label-value"
					style={{
                        left: `${progressPercentage}%`,
                        display: employeeCount == minEmployeeCount || employeeCount == maxEmployeeCount ? 'none' : 'block'
                      }}
				>{employeeCount}</div>
			  <div className='form-range__values'>
				<span>{minEmployeeCount}</span>
				<span>{maxEmployeeCount}</span>
			  </div>
			</form>
	)
}

export default EmployeeInputRange;