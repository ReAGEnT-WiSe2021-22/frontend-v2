/* eslint-disable react/jsx-no-constructed-context-values */
import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import Tabs from '../components/Layout/Tabs';
import { fixtures, MockWrappers } from './utils';

describe('Tabs view', () => {
  const setActiveParty = jest.fn();

  const component = () => render(
    <MockWrappers setActiveParty={setActiveParty}>
      <Tabs />
    </MockWrappers>,
  );

  afterEach(cleanup);

  it.each([...fixtures.parties])('Renders button of all parties', (party) => {
    const { getByText } = component();
    expect(getByText(party)).toBeDefined();
  });

  it.each([...fixtures.parties])('Calls the proper function when a tab button is clicked', (party) => {
    const { getByText } = component();
    fireEvent.click(getByText(party));

    expect(setActiveParty).toBeCalledWith(party);
    setActiveParty.mockClear();
  });
});
