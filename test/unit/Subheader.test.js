/**
 * @jest-environment jsdom
 */

import React from 'react';
import Subheader from '../../src/components/header/Subheader';
import { render } from '@testing-library/react';

describe('Subheader rendering tests/snapshot', () => {
  it('should match snapshot', () => {
    const result = render(<Subheader />);

    expect(result).toMatchSnapshot();
  });
});
