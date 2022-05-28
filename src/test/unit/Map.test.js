/**
 * @jest-environment jsdom
 */

import React from 'react';
import DynamicMapNike from '../../components/map/DynamicMapNike';
import { render } from '@testing-library/react';

describe('DynamicMapNike rendering tests/snapshot', () => {
  it('should match snapshot', () => {
    const result = render(<DynamicMapNike />);

    expect(result).toMatchSnapshot();
  });
});
