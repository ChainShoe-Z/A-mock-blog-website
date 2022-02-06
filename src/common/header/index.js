import React, { Component } from 'react';
//connect the provider and store
import { connect } from 'react-redux';
import  { actionCreators}  from './store';
import {
    HeaderWrapper,
    Logo, //import static source here
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    Addition,
    Button,
    SearchWrapper
} from './style';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';



class Header extends Component{

    getListArea() {
        const { focused, list, page, mouseIn,totalPage, handleMouseEnter, handleMouseLeave, handelChangePage } = this.props;
        const newList = list.toJS(list);
        const pageList = []; // because list is an immutable object, use toJS to convert to regular JS list to use newList[] to visit elements
        if (newList.length >0 ) { //to kill the error, otherwise an empty list will be print 10 times
            for (let i = (page-1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList}> {newList[i]} </SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >
                    <SearchInfoTitle>
                        Hot Search
                        <SearchInfoSwitch onClick = {() => handelChangePage(page, totalPage)}>Change</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }
        else {
            return null;
        }
    }

    render() {
        const { focused, handleInputFocus, handleBlur, list } = this.props;
        return (
            <HeaderWrapper> 
                {/* HeaderWrapper is a label with style */}
                <Link to='/'>
                    <Logo />
                </Link>
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
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        > 
                            <NavSearch
                                className={focused ? 'focused': ''}
                                onFocus={() => handleInputFocus(list)} //give it to props, and map dispatch and props in  mapDispatchProps
                                onBlur={handleBlur}
                            ></NavSearch>
                        </CSSTransition>
                        
                        <i className={focused ? 'focused iconfont':'iconfont'}>&#xe62d;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writing'>Sign up</Button>
                    <Button className='register'>Pulish</Button>
                </Addition>
            </HeaderWrapper>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
// Now Header is a component without state, has better performance 
//Header is an UI component, only focus on UI 


//"get data from store"
//map the state to props, so we can use props to get the state
const mapStateToPorps = (state) => {
    return {
        //get data from "focused" under header
        focused: state.getIn(['header', 'focused']), //use redux-immutable to get header->focused   getIn = state.get('header').get('focused')
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) { //only ask for ajax when list.size is 0
            if (list.size === 0) {dispatch(actionCreators.getList());}
            
            //use action creator to import action. To break actions into "components", good for maintainous
            dispatch(actionCreators.searchFocus()); // send this action to store, store give the prev data and new data to reducer, reducer
        },
        handleBlur() {
            dispatch(actionCreators.searchBlur()); // send this action to store, store give the prev data and new data to reducer, reducer
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handelChangePage(page, totalPage) {
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page+1));
            } 
            else {
                dispatch(actionCreators.changePage(1));
            }
            
            
            
        }

    }
}

//connect the header with store
export default connect(mapStateToPorps, mapDispathToProps)(Header);
