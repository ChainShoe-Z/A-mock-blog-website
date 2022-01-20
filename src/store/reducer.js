const defaultState = {
    focused: false
};

//this is a pure function, that is, fixed input -> fixed output, and no side effect(can't change the variable)
export default (state=defaultState, action) => {
    if (action.type === 'search_focus') {
        return {
            focused: true
        }
    }

    if (action.type === 'search_blur') {
        return {
            focused: false
        }
    }

    return state;
}