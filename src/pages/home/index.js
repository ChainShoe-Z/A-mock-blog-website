import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import axios from 'axios';
import { connect } from 'react-redux';

import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
 } from './style';

class Home extends Component {
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
            </HomeWrapper>
        );
    }

    componentDidMount(){
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            }
            this.props.changeHomeData(action)
            console.log(result);
        })
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData(action) {
        dispatch(action);
    }
});
export default connect(null, mapDispatch)(Home);

