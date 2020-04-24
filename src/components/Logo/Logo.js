import React from 'react';
import Burgerlogo from '../../assets/images/burger-logo.png';
import Classes from './Logo.module.css';

const Logo = () => {
	return (
		<div className={Classes.Logo}>
			<img src={Burgerlogo} alt='MyBurger' />
		</div>
	);
};

export default Logo;
