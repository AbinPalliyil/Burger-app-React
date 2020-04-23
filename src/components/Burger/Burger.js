import React from "react";
import BurgerIngrediant from "./BurgerIngrediants/BurgerIngrdiant";
import Classes from "./Burger.module.css"

const Burger = (props) => {
    const transformedIngredients = Object.keys(props.Ingredients).map(igKey => {
        return [...Array(props.Ingredients[igKey])].map((_, i) => {
           return <BurgerIngrediant key={igKey+i} type={igKey} />
        })
    });
return(
    <div className={Classes.Burger}>
        <BurgerIngrediant type="bread-top" />
        {transformedIngredients}
        <BurgerIngrediant type="bread-bottom" />
      
    </div>
)
}

export default Burger;