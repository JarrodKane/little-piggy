import React from 'react';
import { render } from '@testing-library/react';

import Player from './Player';

test('<Player>', () => {
  const { container } = render(<Player />);
  //snapshot testing
  expect(container.firstChild).toMatchSnapshot();
});
