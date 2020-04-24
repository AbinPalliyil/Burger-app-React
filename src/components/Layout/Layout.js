import React from 'react';

import Aux from '../../hoc/Auxilary';

import Classes from '../Layout/Layout.module.css';
import PropTypes from 'prop-types';

const Layout = (props) => (
	<Aux>
		<div className={Classes.Content}>Menubar</div>
		<main>{props.children}</main>
	</Aux>
);

Layout.propTypes = {
	children: PropTypes.object,
};

export default Layout;
