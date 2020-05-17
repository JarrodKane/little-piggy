import React from 'react';
import { render } from '@testing-library/react';

import Btn from './Btn';

test('<Btn>', () => {
  const { container } = render(<Btn />);
  //snapshot testing
  expect(container.firstChild).toMatchSnapshot();
});
