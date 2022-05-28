/**
 * @jest-environment jsdom
 */

import React from 'react';
import Newsletter from '../../components/newsletter/Newsletter';
import { render } from '@testing-library/react';

describe('Newsletter rendering tests/snapshot', () => {
  it('should match snapshot', () => {
    const result = render(<Newsletter />);

    expect(result).toMatchSnapshot();
  });
});
