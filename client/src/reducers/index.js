import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import donationReducer from './donationsReducer';
//import comments from './needReducer';

//const rootReducer = combineReducers({posts, comments, routing: routerReducer });
const rootReducer = combineReducers({donationReducer, routing: routerReducer });

export default rootReducer;
