import React from 'react';
import PropTypes from 'prop-types';
import Classes from './BuildControl.module.css';

const BuildControl = (props) => {
	return (
		<div className={Classes.BuildControl}>
			<div className={Classes.Label}> {props.label} </div>
			<button
				onClick={props.removed}
				disabled={props.disabled}
				className={Classes.Less}>
				Less
			</button>
			<button onClick={props.added} className={Classes.More}>
				More
			</button>
		</div>
	);
};

BuildControl.propTypes = {
	label: PropTypes.string.isRequired,
	added: PropTypes.func.isRequired,
	removed: PropTypes.func.isRequired,
	disabled: PropTypes.bool.isRequired,
	totalPrice: PropTypes.number.isRequired,
};

export default BuildControl;
