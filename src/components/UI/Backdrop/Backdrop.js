import React from 'react';
import PropTypes from 'prop-types';
import Classes from './Bckdrop.module.css';

const Backdrop = (props) => {
	const backdrop = props.show ? (
		<div className={Classes.Backdrop} onClick={props.clicked}></div>
	) : null;

	return backdrop;
};

Backdrop.proptypes = {
	show: PropTypes.bool.isRequired,
	clicked: PropTypes.func.isRequired,
};

export default Backdrop;
