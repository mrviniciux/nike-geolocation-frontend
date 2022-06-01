/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import Navbar from '../../src/components/navbar/Navbar';
import { render } from '@testing-library/react';

describe('Navbar rendering tests/snapshot', () => {
  it('should have nike logo as described on mocks', () => {
    const { getByTestId } = render(<Navbar />);

    expect(getByTestId('logo-img')).toHaveAttribute(
      'src',
      '/assets/logo_nike.svg'
    );
  });

  it('should render menu items as described on mocks', () => {
    const { getByTestId, getAllByTestId } = render(<Navbar />);

    expect(getByTestId('main-menu')).toBeInTheDocument();
    expect(getAllByTestId('menu-item')).toHaveLength(6);
  });

  it('should render search input and other actions', () => {
    const { getByTestId, getAllByTestId, getByPlaceholderText } = render(<Navbar />);

    expect(getByPlaceholderText('Buscar')).toBeInTheDocument();
    expect(getByTestId('menu-icon')).toBeInTheDocument();
    expect(getAllByTestId('bag-icon')).toHaveLength(2);
  });
});
