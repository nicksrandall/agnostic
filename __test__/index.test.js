import 'babel-polyfill';
import 'webcomponentsjs/lite';

import Button from '../src/button';

// write actual tests
describe('Given an instance of this library', () => {
  it('should init without failure', () => {
    expect(Button).toEqual(Button);
  });
});
