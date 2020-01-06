import React from 'react';
import classes from './navigationItems.module.css'
import NavigationItem from './navigationItem/navigationitem'

const navigationItems=(props)=>{
    let orders=null;
    if(props.isAuthenticated){
        orders= <NavigationItem link="/orders">Orders</NavigationItem>
    }
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Burger Builder</NavigationItem>
            {orders}
            {!props.isAuthenticated? 
            <NavigationItem link="/Auth">Authenticate</NavigationItem>
            :<NavigationItem link="/logout">Logout</NavigationItem>}
        </ul>

    );
}

export default navigationItems;