import React, {Component} from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger"

class BurgerBuilder extends  Component {

state= {
    Ingredients: {
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2
    }
}

    render() {
        return(
            <Aux>
                <Burger Ingredients={this.state.Ingredients} />
                <div>
                    Burger Ingrediats
                </div>
            </Aux>
        )
    }

}

export default BurgerBuilder;