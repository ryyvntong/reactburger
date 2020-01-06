import React, {Component} from 'react';
import classes from './Modal.module.css'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../Backdrop/backdrop'
// import { prependToMemberExpression } from '@babel/types';


class Modal extends Component{
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show !==this.props.show || nextProps.children !== this.props.children;
    }


    render(){
    return(
        <Aux>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
            <div className={classes.Modal}
            style={{
                transform: this.props.show? 'translateY(0)': 'translateY(-100bh)',
                display: this.props.show ?"block" : 'none'
            }}>
                {this.props.children}
            </div>
        </Aux>
    )
}};

export default Modal;