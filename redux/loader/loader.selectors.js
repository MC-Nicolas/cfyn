import { createSelector } from 'reselect';

export const selectLoader = (state) => state.loader;

export const selectLoaderIsVisible = createSelector(
  [selectLoader],
  (loader) => loader.isVisible
);
export const selectLoaderIsLoading = createSelector(
  [selectLoader],
  (loader) => loader.isLoading
);

export const selectLoaderText = createSelector(
  [selectLoader],
  (loader) => loader.text
);
