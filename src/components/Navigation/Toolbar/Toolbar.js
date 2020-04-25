import React from 'react';
import Classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => {
	return (
		<header className={Classes.Toolbar}>
			<div>Menu</div>
			<Logo />
			<NavigationItems />
		</header>
	);
};

export default Toolbar;
