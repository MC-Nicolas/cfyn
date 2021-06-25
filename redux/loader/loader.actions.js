import LoaderActionTypes from './loader.types';

// ------- ACTIONS -------- //

export const setLoaderIsVisible = (isVisible) => ({
  type: LoaderActionTypes.SET_LOADER_IS_VISIBLE,
  payload: isVisible,
});

// -------- ASYNC --------- //
