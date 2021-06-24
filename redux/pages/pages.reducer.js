import PagesActionTypes from './pages.types';

export const INITIAL_STATE = {
  activeTab: 'balance',
};

const PagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PagesActionTypes.SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};
export default PagesReducer;
