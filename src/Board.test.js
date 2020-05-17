import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

test('<Board>', () => {
  const { container } = render(<Board />);
  //snapshot testing
  expect(container.firstChild).toMatchSnapshot();
});
