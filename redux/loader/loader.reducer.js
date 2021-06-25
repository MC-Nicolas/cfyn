import LoaderActionTypes from './loader.types';

export const INITIAL_STATE = {
  isVisible: false,
  isLoading: true,
  text: '',
};

const LoaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoaderActionTypes.SET_LOADER_IS_VISIBLE:
      return {
        ...state,
        isVisible: action.payload,
      };
    case LoaderActionTypes.SET_LOADER_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case LoaderActionTypes.SET_LOADER_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
export default LoaderReducer;
