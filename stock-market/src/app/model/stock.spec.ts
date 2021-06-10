import { Stock } from './stock';

describe('Stock', () => {
  it('should create an instance', () => {
    expect(new Stock('My stock', '12d', 123, 100)).toBeTruthy();
  });
});
