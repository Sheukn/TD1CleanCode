import { calculPoints } from './index';


describe('calculPoints', () => {
    it ('should return 17 if dices are 1,2,3,5,6', () => {
        expect(calculPoints([1,2,3,5,6])).toBe(17);
    });

    it('should return 50 if dices are 1,1,1,1,1', () => {
        expect(calculPoints([1,1,1,1,1])).toBe(50);
    })
});