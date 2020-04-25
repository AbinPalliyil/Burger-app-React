import React from 'react';
import Classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
	return (
		<ul className={Classes.NavigationItems}>
			<NavigationItem active link='/'>
				Burger Builder
			</NavigationItem>
			<NavigationItem link='/'>Checkout</NavigationItem>
		</ul>
	);
};

export default NavigationItems;
