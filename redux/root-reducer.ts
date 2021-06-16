import { combineReducers } from 'redux';

import UserReducer from './user/user.reducer';
import DataReducer from './data/data.reducer';

const rootReducer = combineReducers({
  user: UserReducer,
  data: DataReducer,
});

export default rootReducer;
