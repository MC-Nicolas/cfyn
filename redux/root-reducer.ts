import { combineReducers } from 'redux';

import UserReducer from './user/user.reducer';
import DataReducer from './data/data.reducer';
import DatabasesReducer from './databases/databases.reducer';
import LoaderReducer from './loader/loader.reducer';
import PagesReducer from './pages/pages.reducer';

const rootReducer = combineReducers({
  user: UserReducer,
  data: DataReducer,
  databases: DatabasesReducer,
  loader: LoaderReducer,
  pages: PagesReducer,
});

export default rootReducer;
