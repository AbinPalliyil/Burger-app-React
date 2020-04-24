import React from 'react';
import PropTypes from 'prop-types';

import Classes from './Modal.module.css';
import Aux from '../../../hoc/Auxilary';
import Backdrop from '../Backdrop/Backdrop';
const Modal = (props) => {
	return (
		<Aux>
			<Backdrop show={props.show} clicked={props.modalClosed} />
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
		</Aux>
	);
};

Modal.propTypes = {
	children: PropTypes.object.isRequired,
	show: PropTypes.bool.isRequired,
	modalClosed: PropTypes.func.isRequired,
};
export default Modal;
