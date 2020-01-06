import React, { Component } from 'react'
import CheckoutSummary from '../../components/order/checkoutsummary/checkoutsummary'
import {Route, Redirect} from 'react-router-dom'
import ContactData from './contactdata/contactdata'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'

class Checkout extends Component {



   

    checkoutCancelledHandler=()=>{
        this.props.history.goBack();
    }

    checkoutContinueHandler=()=>{
        this.props.history.replace('/checkout/contact-data');
        console.log(this.props.price)
    }
    render(){
        let summary=<Redirect to="/"/>
        if(this.props.ings){
            const purchasedRedirect=this.props.purchased ?<Redirect to="/"/> :null;
            summary=(
            <div>
                {purchasedRedirect}
                <CheckoutSummary ingredients={this.props.ings}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinue={this.checkoutContinueHandler}/>
                <Route path={this.props.match.path + '/contact-data'}
                component={ContactData}/>
            </div>
            )
        }

        return(
            <div>
                {summary}

            </div>

        )
    }
}

const mapStateToProps=state=>{
    return{
        ings:state.burgerBuilder.ingredients,
        purchased: state.order.purchased
        
    }
};



export default connect(mapStateToProps)(Checkout)