import React, {Component} from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/burgerbuilder/burgerbuilder'
import Checkout from './containers/checkout/checkout'
import {Route, Switch, Redirect} from 'react-router-dom'
import Orders from './containers/orders/orders'
import Auth from './containers/auth/auth'
import Logout from './containers/auth/logout/logout'
import {connect} from 'react-redux'
import * as actions from './store/actions/index'
class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignUp();
  }
  
  render (){
    let routes=(
    <Switch>
      <Route path="/auth" component={Auth}/>
      <Route exact path="/" component={BurgerBuilder}></Route>
      <Redirect to="/"></Redirect>
      </Switch>
    );

    if(this.props.isAuthenticated){
      routes=(
        <Switch>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/auth" component={Auth}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/logout" component={Logout}/>
        <Route exact path="/" component={BurgerBuilder}></Route>
        <Redirect to="/"></Redirect>
    </Switch>
      );
    }
    return(
      <div>
        <Layout> 
            {routes}
        </Layout>
      </div>
    )
  }
}


const mapStateToProps=state=>{
  return{
    isAuthenticated:state.auth.token!==null
  }
}

const mapDispatchToProps=dispatch=>{
  return{
  
    onTryAutoSignUp:()=>dispatch(actions.authCheckState())

    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(App);
