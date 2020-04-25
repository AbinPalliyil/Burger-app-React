import React from 'react';
import PropTypes from 'prop-types';

import Classes from './NavigationItem.module.css';
const NavigationItem = (props) => {
	return (
		<li className={Classes.NavigationItem}>
			<a
				className={props.active ? Classes.active : null}
				href={props.link}>
				{props.children}
			</a>
		</li>
	);
};

NavigationItem.propTypes = {
	active: PropTypes.bool,
	link: PropTypes.string,
	children: PropTypes.string,
};

export default NavigationItem;
