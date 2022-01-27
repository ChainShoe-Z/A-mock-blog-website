//move the reducer to Header folder, break the reducer into different folders, and combine them in the main reducer
//all data needed in header are stored here
import * as constants from './constants';
import { fromJS } from 'immutable'; // use immutable to avoid changing of state


const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
});

//this is a pure function, that is, fixed input -> fixed output, and no side effect(can't change the variable)
export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.merge({ // use merge to modify many state simultaniously, only be called once, BETTER PERFORMANCE
                list: action.data,
                totalPage: action.totalPage
            });
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}