//this is a main reducer, combine different reducers from different components
import { combineReducers } from 'redux-immutable';

//here, to avoid making the path too long, create an index file as an entry of Header/store, look for /Header/store will guid to the Header/store/reducer
import { reducer as headerReducer} from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';


const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer //content under home are produced by homeReducer
})

export default reducer;