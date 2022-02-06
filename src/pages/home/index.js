import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import { BackTop } from './style';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
 } from './style';

class Home extends PureComponent {
    //improve performance, only re-render when the data related to the current component is changed
    shouldComponentUpdate(){

    }

    handleScrollTop(){
        window.scroll(0,0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt="" src="https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2021/09/final-fantasy-xiv-03_0.jpg"/>
                    <Topic />
                    <List />
                </HomeLeft>
                    
                <HomeRight>
                    <img alt="" srt="https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2021/09/final-fantasy-xiv-04.jpg"/>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>go top</BackTop>: null}
                
            </HomeWrapper>
        );
    }

    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})


const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow(){
        if (document.documentElement.scrollTop > 200) {
            dispatch(actionCreators.toggleTopShow(true))
        }else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});

export default connect(mapState, mapDispatch)(Home);

