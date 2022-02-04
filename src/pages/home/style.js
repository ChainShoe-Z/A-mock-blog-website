import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width:960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top;
    width: 625px;
    float: left;
    
    .banner-img {
        width: 550px;
        height: 270px;
    }

`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
    
`;

export const TopicWrapper = styled.div`
    margin-left: 0;
    overflow: hidden;
    padding: 10px 0 10px 0;
    // background: blue;
    border-bottom: 1px solid #dcdcdc
`;

export const TopicItem = styled.div`
    margin-left: 0;
    margin-bottom: 18px;
    float: left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px, 0;
    border-bottom: 1px solid #dcdcdc;
`

export const ListInfo = styled.div`
    width: 500px;
    folat: left;
`

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});

    background-size: contain   
    //***important, to fully display the background image
`

export const WriterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`

