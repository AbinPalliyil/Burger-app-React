import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxilary';

const OrderSummary = (props) => {
	const ingredients = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: 'capitalize' }}>{igKey}</span> :{' '}
				{props.ingredients[igKey]}
			</li>
		);
	});
	return (
		<Aux>
			<h3>Your order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredients}</ul>
			<p>Continoue to checkout?</p>
		</Aux>
	);
};

OrderSummary.propTypes = {
	ingredients: PropTypes.object.isRequired,
};

export default OrderSummary;
