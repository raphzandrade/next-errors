import { render } from '@testing-library/react';

import MyAppMyLib from './my-app-my-lib';

describe('MyAppMyLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyAppMyLib />);
    expect(baseElement).toBeTruthy();
  });
});
