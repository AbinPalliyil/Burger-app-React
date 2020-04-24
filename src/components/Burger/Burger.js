import React from 'react';
import PropTypes from 'prop-types';
import BurgerIngrediant from './BurgerIngrediants/BurgerIngrdiant';
import Classes from './Burger.module.css';

const Burger = (props) => {
	let transformedIngredients = Object.keys(props.Ingredients)
		.map((igKey) => {
			return [...Array(props.Ingredients[igKey])].map((_, i) => {
				return <BurgerIngrediant key={igKey + i} type={igKey} />;
			});
		})
		.reduce((arr, el) => {
			return arr.concat(el);
		}, []);

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please add Ingredients</p>;
	}
	return (
		<div className={Classes.Burger}>
			<BurgerIngrediant type='bread-top' />
			{transformedIngredients}
			<BurgerIngrediant type='bread-bottom' />
		</div>
	);
};

Burger.propTypes = {
	Ingredients: PropTypes.object,
};

export default Burger;
