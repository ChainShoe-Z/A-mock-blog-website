//move the reducer to Header folder, break the reducer into different folders, and combine them in the main reducer
//all data needed in header are stored here

import { fromJS } from 'immutable'; // use immutable to avoid changing of state


const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
});

//this is a pure function, that is, fixed input -> fixed output, and no side effect(can't change the variable)
export default (state = defaultState, action) => {
    switch(action.type) {
        case 'change_home_data':
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            })
            
        default:
            return state;
    }
}