import { createSelector } from 'reselect';

export const selectPages = (state) => state.pages;

export const selectActiveTab = createSelector(
  [selectPages],
  (pages) => pages.activeTab
);
