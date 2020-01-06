// import {configure, shallow}from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// import React from 'react'
// import {BurgerBuilder} from './burgerbuilder'
// import { initIngredients } from '../../store/actions';
// import BuildControls from '../../components/burger/buildcontrols/buildcontrols'
// configure({adapter:new Adapter()});

// describe('<BurgerBuilder/>',()=>{
//     let wrapper;
//     beforeEach(()=>{
//         wrapper=shallow(<BurgerBuilder onInitIngredients={()=>{}}/>)
//     });

//     it("should render build controls when recieving ings",()=>{
//     wrapper.setProps({ings:{bacon:0}});
//     expect(wrapper.find(BuildControls)).toHaveLength(1);
//     })});