import { createSelector } from 'reselect';

export const selectData = state => state.data;

export const selectAreDataVisible = createSelector(
  [selectData],
  data => data.areDataVisible
);
