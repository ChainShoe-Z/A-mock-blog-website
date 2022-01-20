//an entry for Header/store , to import reducer under this folder, just import Header/store, it will guid to index.js->reducer.js
import reducer from './reducer'
import * as actionCreators from './actionCreators';
import * as constants from './constants';

export { reducer, actionCreators, constants }