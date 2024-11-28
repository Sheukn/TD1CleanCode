import { calculPoints } from './index';

it ('should return 17 if dices are 1,2,3,5,6', () => {
    expect(calculPoints([1,2,3,5,6])).toBe(17);
});