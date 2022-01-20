import React from 'react';
//connect the provider and store
import { connect } from 'react-redux';

import {
    HeaderWrapper,
    Logo, //import static source here
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';
import { CSSTransition } from 'react-transition-group';



///////////////////////////////////////////////////////////////////////////////////////////////////////
// Now Header is a component without state, has better performance 
const Header = (props)=> {
    return (
        <HeaderWrapper> 
            {/* HeaderWrapper is a label with style */}
            <Logo />
            <Nav>
                <NavItem className='left active'>Main Page</NavItem>
                <NavItem className='left'>Download</NavItem>
                <NavItem className='right'>Log in</NavItem>
                <NavItem className='right'>
                    {/* this 2 lines of code will import icon from iconfront.cn */}
                    <link rel="stylesheet" href='//at.alicdn.com/t/font_3152226_r96mwjoe3s.css' /> 
                    <i className='iconfont'>&#xe674;</i>
                </NavItem>
                <SearchWrapper>
                    {/* add animation effect by import CSSTransition*/}
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    > 
                        <NavSearch
                            className={props.focused ? 'focused': ''}
                            onFocus={props.handleInputFocus} //give it to props, and map dispatch and props in  mapDispatchProps
                            onBlur={props.handleBlur}
                        ></NavSearch>
                    </CSSTransition>
                    
                    <i className={props.focused ? 'focused iconfont':'iconfont'}>&#xe62d;</i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writing'>Sign up</Button>
                <Button className='register'>Pulish</Button>
            </Addition>
        </HeaderWrapper>
    );
}




//map the state to props, so we can use props to get the state
const mapStateToPorps = (state) => {
    return {
        focused: state.focused
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'search_focus'
            };
            dispatch(action); // send this action to store, store give the prev data and new data to reducer, reducer
        },
        handleBlur() {
            const action = {
                type: 'search_blur'
            };
            dispatch(action); // send this action to store, store give the prev data and new data to reducer, reducer
        }

    }
}

//connect the header with store
export default connect(mapStateToPorps, mapDispathToProps)(Header);
