import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
});

//be called by getList, no need to be export
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data), //convert the data: from normal list --> immutable list, then it  can be modified in reducer, because in reducer, otherwise immutable list cannot be modified to normal list
    totalPage: Math.ceil(data.length / 10)
});

export const getList = () =>{
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(()=> {
            console.log('error');
        })
     }
}



