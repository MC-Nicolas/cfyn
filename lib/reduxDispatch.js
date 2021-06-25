import { store } from '../redux/store';
import LoaderActionTypes from '../redux/loader/loader.types';
import PagesActionTypes from '../redux/pages/pages.types';

export const setLoaderIsVisible = (isVisible) => {
  store.dispatch({
    type: LoaderActionTypes.SET_LOADER_IS_VISIBLE,
    payload: isVisible,
  });
};

export const setLoaderText = (text) => {
  store.dispatch({
    type: LoaderActionTypes.SET_LOADER_TEXT,
    payload: text,
  });
};

export const setActiveTabFromOutsideRC = (activeTab) => {
  store.dispatch({
    type: PagesActionTypes.SET_ACTIVE_TAB,
    payload: activeTab,
  });
};
