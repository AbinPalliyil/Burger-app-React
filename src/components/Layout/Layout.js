import React from 'react';

import Aux from '../../hoc/Auxilary';

import Classes from '../Layout/Layout.module.css';
import PropTypes from 'prop-types';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) => (
	<Aux>
		<Toolbar />
		<main className={Classes.Content}>{props.children}</main>
	</Aux>
);

Layout.propTypes = {
	children: PropTypes.object,
};

export default Layout;
