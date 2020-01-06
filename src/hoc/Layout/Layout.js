import React, {Component}from 'react';
import Aux from '../Auxiliary/Auxiliary'
import classes from './Layout.module.css'
import Toolbar from '../../components/navigation/toolbar/toolbar'
import SideDrawer from '../../components/navigation/sidedrawer/sidedrawer'
import {connect} from 'react-redux'
class Layout extends Component{

    state={
        showSideDrawer:false
    }
    sideDrawerToggleHandler=()=>{
    this.setState((prevState)=>{
        return{showSideDrawer:!prevState.showSideDrawer}
    })}
    render(){
         return (
            <Aux>
                <Toolbar 
                isAuth={this.props.isAuthenticated}
                toggle={this.sideDrawerToggleHandler}/>
                <SideDrawer isAuth={this.props.isAuthenticated}
                open={this.state.showSideDrawer} toggle={this.sideDrawerToggleHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
    );
}};

const mapStateToProps=state=>{
    return{
        isAuthenticated:state.auth.token !==null
    };
}

export default connect(mapStateToProps)(Layout);