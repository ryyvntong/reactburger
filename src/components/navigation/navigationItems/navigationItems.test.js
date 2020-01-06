// import {configure, shallow}from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// import React from 'react'
// import NavigationItems from './navigationItems'
// import NavigationItem from './navigationItem/navigationitem'
// configure({adapter:new Adapter()})

// describe('<NavigationItems/>',()=>{
//     let wrapper;
//     beforeEach(()=>{
//         wrapper=shallow(<NavigationItems/>)
//     })

//     it('should render 2 <NavigationItems/> elements if not authed', ()=>{
//         expect(wrapper.find(NavigationItem)).toHaveLength(2);
//     })
//     it('should render 2 <NavigationItems/> elements if authed', ()=>{
//         wrapper.setProps({isAuthenticated:true})
//         expect(wrapper.find(NavigationItem)).toHaveLength(3);
//     })
//     it('should render 2 <NavigationItems/> elements if authed', ()=>{
//         wrapper.setProps({isAuthenticated:true})
//         expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true);
//     })


// })