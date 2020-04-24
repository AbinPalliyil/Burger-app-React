import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
			ingredients: {
				salad: 0,
				bacon: 0,
				cheese: 0,
				meat: 0,
			},
			totalPrice: 100,
			purchasable: false,
			purchasing: false,
		};
		this.addIngredientHandler = this.addIngredientHandler.bind(this);
		this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
		this.purchasehandler = this.purchasehandler.bind(this);
		this.purchaseCancelHandler = this.purchaseCancelHandler.bind(this);
		this.purchaseContinoueHandler = this.purchaseContinoueHandler.bind(
			this,
		);
	}

	purchaseCancelHandler() {
		this.setState({ purchasing: false });
	}

	purchaseContinoueHandler() {
		alert('Completed');
		this.setState({ purchasing: false });
	}

	purchasehandler() {
		this.setState({ purchasing: true });
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
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIANT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;

		this.setState({
			ingredients: updatedIngredients,
			totalPrice: newPrice,
		});
		this.updatePurchaseState(updatedIngredients);
	}

	removeIngredientHandler(type) {
		const oldCount = this.state.ingredients[type];
		if (oldCount !== 0) {
			const updatedCount = oldCount - 1;
			const updatedIngredients = {
				...this.state.ingredients,
			};
			updatedIngredients[type] = updatedCount;
			const oldPrice = this.state.totalPrice;
			const priceDecreation = INGREDIANT_PRICES[type];
			const newPrice = oldPrice - priceDecreation;
			this.setState({
				totalPrice: newPrice,
				ingredients: updatedIngredients,
			});
			this.updatePurchaseState(updatedIngredients);
		}
	}

	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<Aux>
				<Burger
					Ingredients={this.state.ingredients}
					price={this.state.totalPrice}
				/>
				{this.state.purchasing && (
					<Modal
						show={this.state.purchasing}
						modalClosed={this.purchaseCancelHandler}>
						<OrderSummary
							ingredients={this.state.ingredients}
							continoue={this.purchaseContinoueHandler}
							cancel={this.purchaseCancelHandler}
							totalPrice={this.state.totalPrice}
						/>
					</Modal>
				)}
				<BuildControls
					ingedientAdded={this.addIngredientHandler}
					ingedientRemoved={this.removeIngredientHandler}
					disabled={disabledInfo}
					totalPrice={this.state.totalPrice}
					purchasable={this.state.purchasable}
					ordered={this.purchasehandler}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
