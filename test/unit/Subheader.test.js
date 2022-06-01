/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import Subheader from '../../src/components/header/Subheader';
import { render } from '@testing-library/react';

describe('Subheader rendering tests/snapshot', () => {
  it('should have jordan and snkrs logo as described on mocks', () => {
    const { getByTestId } = render(<Subheader />);

    expect(getByTestId('logo-jordan')).toHaveAttribute(
      'src',
      '/assets/logo_Jordan.svg'
    );
    expect(getByTestId('logo-snkrs')).toHaveAttribute(
      'src',
      '/assets/logo_snkrs.svg'
    );
  });

  it('should have menu items as described on mocks', () => {
    const { getByTestId, getAllByTestId } = render(<Subheader />);

    expect(getByTestId('sub-menu')).toBeInTheDocument();
    expect(getAllByTestId('sub-menu-item')).toHaveLength(4);
  });
});
