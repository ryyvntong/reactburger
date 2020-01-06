import React, {Component} from 'react';
import Button from '../../../components/UI/button/button'
import classes from './contactdata.module.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/spinner/spinner'
import Input from '../../../components/UI/input/input'
import {connect} from 'react-redux'
import { strictEqual } from 'assert';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index'
class ContactData extends Component{
    state={
        orderForm:{
                
                name:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder: 'Your Name'
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false

                },
                street:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder: 'Your Street'
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false

                },
                zipCode:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder: 'ZIP CODE'
                    },
                    value:'',
                    validation:{
                        required:true,
                        minLength:6,
                        maxLength:6
                    },
                    valid:false,
                    touched:false

                },
                country:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder: 'Your country'
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false

                },
                email: {
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder: 'Your E-mail'
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false
                },
                deliveryMethod:{
                    elementType:'select',
                    elementConfig:{
                        options:[
                            {value:'fastest', displayValue: 'Fastest'},
                            {value:'cheapest', displayValue: 'Cheapest'}
                        ]},
                    validation:{
                        required:false
                    },
                    valid:true
                    ,
                
                
        },  
        },
    formIsValid:false};
    orderHandler=(event)=>{
        event.preventDefault();
        this.setState({loading:true});
        const formData={}
        for (let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier]=this.state.orderForm[formElementIdentifier].value;
        }
        
        const order={
            ingredients:this.props.ings,
            price:this.props.price,
            orderData:formData,
            userId:this.props.userId
            // in a real app recalculate price on the server
        }

        this.props.onOrderBurger(order,this.props.token);
    }

checkValidity(value,rules){
    let isValid=true;

    if(rules.required){
        isValid=value.trim()!=='' && isValid;
    }

    if (rules.minLength){
        isValid=value.length>=rules.minLength && isValid
    }
    if (rules.maxLength){
        isValid=value.length<=rules.maxLength && isValid
    }
    return isValid;


}


inputChangedHandler=(event, inputIdentifier)=>{
    const updatedOrderForm={
        ...this.state.orderForm
    };
    
    const updatedFormElement={...updatedOrderForm[inputIdentifier]};
    updatedFormElement.value=event.target.value;
    updatedOrderForm[inputIdentifier]=updatedFormElement;
    let formIsValid=true;
    for(let inputIdentifier in updatedOrderForm){
        formIsValid=updatedOrderForm[inputIdentifier].valid && formIsValid;
        
    }
    


    this.setState({orderForm:updatedOrderForm, formIsValid: formIsValid})
    
}

render(){
    const formElementsArray=[];
    for (let key in this.state.orderForm){
        formElementsArray.push({
            id:key,
            config: this.state.orderForm[key]
        })
    }
    let form =(
    <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement=>{
            return(
                <Input key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                shouldValidate={formElement.config.validation.required}
                invalid={!formElement.config.valid}
                touched={formElement.config.touched}
                changed={(event)=>this.inputChangedHandler(event, formElement.id)}></Input>
            )
        })}
        <Button btnType="Success" clicked={this.orderHandler} disabled={!this.state.formIsValid}>ORDER</Button>
    </form>);
    if (this.props.loading){
        form=<Spinner/>
    }
    return(
        <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
                
        </div>
    )
}}

const mapStateToProps=state=>{
    return{
        ings:state.burgerBuilder.ingredients,
        price:state.burgerBuilder.totalPrice,
        loading:state.order.loading,
        token:state.auth.token,
        userId:state.auth.userId
    }
}

const mapDispatchToProps=dispatch=>{
    return{
    onOrderBurger:(orderData,token)=>dispatch(actions.purchaseBurger(orderData,token))
}};

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios))