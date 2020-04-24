import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

// Setting price for ingerdiants
const INGREDIANT_PRICES = {
	salad: 10,
	bacon: 30,
	cheese: 70,
	meat: 80,
};

class BurgerBuilder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Ingredients: {
				salad: 0,
				bacon: 0,
				cheese: 0,
				meat: 0,
			},
			totalPrice: 100,
			purchasable: false,
		};
		this.addIngredientHandler = this.addIngredientHandler.bind(this);
		this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
	}

	updatePurchaseState(ingerdients) {
		const sum = Object.keys(ingerdients)
			.map((igKey) => {
				return ingerdients[igKey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		this.setState({ purchasable: sum > 0 });
	}

	/**
	 * Handles ingerdient more click
	 * @param {string} type
	 */
	addIngredientHandler(type) {
		const oldCount = this.state.Ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = { ...this.state.Ingredients };
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIANT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;

		this.setState({
			Ingredients: updatedIngredients,
			totalPrice: newPrice,
		});
		this.updatePurchaseState(updatedIngredients);
	}

	removeIngredientHandler(type) {
		const oldCount = this.state.Ingredients[type];
		if (oldCount !== 0) {
			const updatedCount = oldCount - 1;
			const updatedIngredients = {
				...this.state.Ingredients,
			};
			updatedIngredients[type] = updatedCount;
			const oldPrice = this.state.totalPrice;
			const priceDecreation = INGREDIANT_PRICES[type];
			const newPrice = oldPrice - priceDecreation;
			this.setState({
				totalPrice: newPrice,
				Ingredients: updatedIngredients,
			});
			this.updatePurchaseState(updatedIngredients);
		}
	}

	render() {
		const diabledInfo = { ...this.state.Ingredients };
		for (const key in diabledInfo) {
			diabledInfo[key] = diabledInfo[key] <= 0;
		}

		return (
			<Aux>
				<Burger
					Ingredients={this.state.Ingredients}
					price={this.state.totalPrice}
				/>
				<BuildControls
					ingedientAdded={this.addIngredientHandler}
					ingedientRemoved={this.removeIngredientHandler}
					disabled={diabledInfo}
					totalPrice={this.state.totalPrice}
					purchasable={this.state.purchasable}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
