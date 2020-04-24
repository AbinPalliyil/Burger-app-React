import React from 'react';
import PropTypes from 'prop-types';
import Classes from './Button.module.css';

const Button = (props) => {
	return (
		<button
			className={`${Classes.Button} ${Classes[props.btnType]}`}
			onClick={props.clicked}>
			{props.children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.string.isRequired,
	clicked: PropTypes.func,
	btnType: PropTypes.string.isRequired,
};

export default Button;
