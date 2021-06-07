/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  render,
  cleanup,
  waitFor,
  waitForDomChange,
} from '@testing-library/react';
import Metatags from './Metatags';

const meta = {
  title: 'CFYN',
  description: 'Your finance made easy !',
};
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

test('<Metatags />', async () => {
  const wrapper = render(
    <Metatags title={meta.title} description={meta.description} />,
    { container: document.head }
  );
  await waitFor(() => {
    expect(document.title).toBe('CFYN');
    expect(wrapper).toMatchSnapshot();
  });
});
