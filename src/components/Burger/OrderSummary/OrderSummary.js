import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';

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
			<p>
				<strong>Total price {props.totalPrice}</strong>
			</p>
			<p>Continoue to checkout?</p>
			<Button btnType='Danger' clicked={props.cancel}>
				Cancel
			</Button>
			<Button btnType='Success' clicked={props.continoue}>
				Continoue
			</Button>
		</Aux>
	);
};

OrderSummary.propTypes = {
	ingredients: PropTypes.object.isRequired,
	cancel: PropTypes.func,
	continoue: PropTypes.func,
	totalPrice: PropTypes.number.isRequired,
};

export default OrderSummary;
