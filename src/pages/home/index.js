import React, { Component } from 'react';
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
                    <img className='banner-img' src="https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2021/09/final-fantasy-xiv-03_0.jpg"/>
                </HomeLeft>
                    
                <HomeRight>
                    <img srt="https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2021/09/final-fantasy-xiv-04.jpg"/>
                </HomeRight>
            </HomeWrapper>
        );
    }
}

export default Home;

