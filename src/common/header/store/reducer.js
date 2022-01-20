//move the reducer to Header folder, break the reducer into different folders, and combine them in the main reducer
//all data needed in header are stored here
import * as constants from './constants'

const defaultState = {
    focused: false
};

//this is a pure function, that is, fixed input -> fixed output, and no side effect(can't change the variable)
export default (state=defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        return {
            focused: true
        }
    }

    if (action.type === constants.SEARCH_BLUR) {
        return {
            focused: false
        }
    }

    return state;
}