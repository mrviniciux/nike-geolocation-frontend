/**
 * @jest-environment jsdom
 */

import React from 'react';
import Pitchbar from '../../src/components/header/Pitchbar';
import { render } from '@testing-library/react';

describe('Pitchbar rendering tests/snapshot', () => {
  it('should match snapshot', () => {
    const result = render(<Pitchbar />);

    expect(result).toMatchSnapshot();
  });
});
