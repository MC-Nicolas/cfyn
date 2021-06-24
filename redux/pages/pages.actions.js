import PagesActionTypes from './pages.types';

// ------- ACTIONS -------- //

export const setActiveTab = (activeTab) => ({
  type: PagesActionTypes.SET_ACTIVE_TAB,
  payload: activeTab,
});

// -------- ASYNC --------- //
