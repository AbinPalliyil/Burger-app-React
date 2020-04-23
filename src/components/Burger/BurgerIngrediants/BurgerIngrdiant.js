import React, {
    Component
} from "react";
import PropTypes from "prop-types";
import Classes from "./BurgerIngrediants.module.css"


class BurgerIngrediant extends Component {
    render() {

        let ingrediant = null;

        switch (this.props.type) {
            case 'bread-bottom':
                ingrediant = <div className ={Classes.BreadBottom }> meat </div>
                break;
            case 'bread-top':
                ingrediant = (
                <div className={Classes.BreadTop}>
                    <div className={Classes.Seeds1}></div>
                    <div className={Classes.Seeds2}></div>
                </div>
                )
                break;
            case 'meat': 
            ingrediant = <div className={Classes.Meat}></div>
                break;
            case 'cheese': 
            ingrediant = <div className={Classes.Cheese}></div>
                break;
            case 'salad': 
            ingrediant = <div className={Classes.Salad}></div>
                break;
                
            case 'bacon': 
                ingrediant = <div className={Classes.Bacon}></div>
                break;                 
            default:
                ingrediant = null;
                break;
        }

        return ingrediant;
    }
}
BurgerIngrediant.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngrediant;