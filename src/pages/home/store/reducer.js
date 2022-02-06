//move the reducer to Header folder, break the reducer into different folders, and combine them in the main reducer
//all data needed in header are stored here

import { fromJS } from 'immutable'; // use immutable to avoid changing of state
import * as constants  from './constants';


const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    })
};

const addArticleList = (state, action) => {
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    })
}


//this is a pure function, that is, fixed input -> fixed output, and no side effect(can't change the variable)
export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action)
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state, action)
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show);

        default:
            return state;
    }
}