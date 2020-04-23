import React from "react";
import Classes from "./BuildControls.module.css"
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = (props) => {

    const controls = [
        {label:"Meat", type: "meat"},
        {label:"Salad", type: "salad"},
        {label:"Bacon", type: "bacon"},
        {label:"Cheese", type: "cheese"},
    ]

    return(
           <div className={Classes.BuildControls}>
           {
               controls.map(ctrls => <BuildControl key={ctrls.label} label={ctrls.label} />)
           }

    </div>
    )
 
}

export default BuildControls;