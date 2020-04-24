import React from 'react';
import PropTypes from 'prop-types';
import Classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
	const controls = [
		{ label: 'Meat', type: 'meat' },
		{ label: 'Salad', type: 'salad' },
		{ label: 'Bacon', type: 'bacon' },
		{ label: 'Cheese', type: 'cheese' },
	];

	return (
		<div className={Classes.BuildControls}>
			{controls.map((ctrls) => (
				<BuildControl
					added={() => props.ingedientAdded(ctrls.type)}
					removed={() => props.ingedientRemoved(ctrls.type)}
					key={ctrls.label}
					label={ctrls.label}
					type={ctrls.type}
					disabled={props.disabled[ctrls.type]}
				/>
			))}
		</div>
	);
};

BuildControls.propTypes = {
	ingedientAdded: PropTypes.func.isRequired,
	ingedientRemoved: PropTypes.func.isRequired,
	disabled: PropTypes.object.isRequired,
};

export default BuildControls;
