import Library from '../src/index.js';

let lib;

describe('Given an instance of my library', () => {
  beforeEach(() => {
    lib = new Library();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).toEqual('Library');
    });
  });
});
