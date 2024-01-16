// reducers/index.js

import { combineReducers } from 'redux';
import markdownReducer from './markdownReducer';

const rootReducer = combineReducers({
  markdown: markdownReducer,
  // Add other reducers here if needed
});

export default rootReducer;
