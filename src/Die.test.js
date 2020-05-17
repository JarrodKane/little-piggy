import React from 'react';
import { render } from '@testing-library/react';

import Die from './Die';

test('<Die>', () => {
  const { container } = render(<Die />);
  //snapshot testing
  expect(container.firstChild).toMatchSnapshot();
});
