import React, { Component } from 'react';
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

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    render() {
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
                            in={this.state.focused}
                            timeout={200}
                            classNames="slide"
                        > 
                            <NavSearch
                                className={this.state.focused ? 'focused': ''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleBlur}
                            ></NavSearch>
                        </CSSTransition>
                        
                        <i className={this.state.focused ? 'focused iconfont':'iconfont'}>&#xe62d;</i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writing'>Sign up</Button>
                    <Button className='register'>Pulish</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    handleInputFocus() {
        this.setState({
            focused: true
        })
    }

    handleBlur() {
        this.setState({
            focused: false
        })
    }
}

export default Header;
