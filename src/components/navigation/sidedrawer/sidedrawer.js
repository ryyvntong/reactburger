import React from 'react';
import Logo from '../../logo/logo'
import NavigationItems from '../navigationItems/navigationItems'
import classes from './sidedrawer.module.css'
import Backdrop from'../../UI/Backdrop/backdrop'
import Aux from '../../../hoc/Auxiliary/Auxiliary'

const sideDrawer =(props)=>{
    let attachedClasses =[classes.SideDrawer,classes.Close];
    if (props.open){
        attachedClasses=[classes.SideDrawer,classes.Open]


    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.toggle}/>
            <div className={attachedClasses.join(' ')} onClick={props.toggle}>
                <div className={classes.Logo}>
                <Logo/>
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
            </div>
        </Aux>
    )};

export default sideDrawer