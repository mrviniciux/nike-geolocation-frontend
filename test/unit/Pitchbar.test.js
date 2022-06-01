/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from 'react';
import Pitchbar from '../../src/components/header/Pitchbar';
import { render } from '@testing-library/react';

describe('Pitchbar rendering tests', () => {
  it('should have nike snkrs logo as described on mocks', () => {
    const { getByTestId } = render(<Pitchbar />);

    expect(getByTestId('logo-img')).toHaveAttribute(
      'src',
      '/assets/logo_nike_snkrs.svg'
    );
  });

  it('should have left and right nav arrows', () => {
    const { getByTestId } = render(<Pitchbar />);

    expect(getByTestId('left-arrow-nav')).toBeInTheDocument();
    expect(getByTestId('right-arrow-nav')).toBeInTheDocument();
  });

  it('should have pitch description', () => {
    const { getByTestId } = render(<Pitchbar />);

    expect(getByTestId('pitch-description')).toBeInTheDocument();
  });
});
