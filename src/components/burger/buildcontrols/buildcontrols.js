import React from 'react';

import classes from './buildcontrols.module.css'
import BuildControl from './buildcontrol/buildcontrol';
const controls =[
    {label: 'Onion', type: 'onion'},
    {label: 'Lettuce', type:'lettuce'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},
]

const buildControls = (props) => {
    return(
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map((ctrl)=>{
            return(
            <BuildControl key={ctrl.label} label={ctrl.label} 
            added={()=>props.ingredientAdded(ctrl.type)}
            removed={()=>props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>)})}
        <button className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.purchasing}>{props.isAuth ? "ORDER NOW": "SIGN IN TO ORDER"}</button>
    </div>)
};

export default buildControls;