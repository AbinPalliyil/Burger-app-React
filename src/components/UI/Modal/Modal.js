import React from 'react';
import PropTypes from 'prop-types';

import Classes from './Modal.module.css';

const Modal = (props) => {
	return (
		<div
			className={Classes.Modal}
			style={{
				msTransform: props.show
					? 'translateY(0)'
					: 'translateY(-100vh)',
				opacity: props.show ? '1' : '0',
			}}>
			{props.children}
		</div>
	);
};

Modal.propTypes = {
	children: PropTypes.object.isRequired,
	show: PropTypes.bool.isRequired,
};
export default Modal;
