import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Classes from './SideDrawer.modue.css';

const SideDrawer = () => {
	return (
		<div className={Classes.Sidedrawer}>
			<Logo height='11%' />
			<nav>
				<NavigationItems />
			</nav>
		</div>
	);
};

export default SideDrawer;
