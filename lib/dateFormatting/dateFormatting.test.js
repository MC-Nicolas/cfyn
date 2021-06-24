import React from 'react';
import { cleanup } from '@testing-library/react';

// Functions
import {
  formatDateFromSlashesToReversedInt,
  formatDateFromSlashesToInvertedDashes,
  formatDateFromInt,
  formatDateFromDashesToInt,
  getUnitsFromIntDate,
} from './dateFormatting';

afterEach(cleanup);

test('formatDateFromSlashesToReversedInt', () => {
  expect(formatDateFromSlashesToReversedInt('01/01/2021')).toBe('20210101');
  expect(formatDateFromSlashesToReversedInt('20/10/2021')).toBe('20211020');
});

test('formatDateFromSlashesToInvertedDashes', () => {
  expect(formatDateFromSlashesToInvertedDashes('01/01/2021')).toBe(
    '2021-01-01'
  );
  expect(formatDateFromSlashesToInvertedDashes('20/10/2021')).toBe(
    '2021-10-20'
  );
});
test('formatDateFromInt', () => {
  expect(formatDateFromInt('20210101')).toBe('01/01/2021');
  expect(formatDateFromInt('20211020')).toBe('20/10/2021');
});
test('formatDateFromDashesToInt', () => {
  expect(formatDateFromDashesToInt('2021-06-21')).toBe('20210621');
  expect(formatDateFromDashesToInt('2021-10-11')).toBe('20211011');
});
test('getUnitsFromIntDate', () => {
  expect(getUnitsFromIntDate('20210621')).toEqual({
    day: '21',
    month: '06',
    year: '2021',
  });
  expect(getUnitsFromIntDate('20181012')).toEqual({
    day: '12',
    month: '10',
    year: '2018',
  });
});
