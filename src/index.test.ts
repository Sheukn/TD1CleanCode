import { calculPoints } from './index';


describe('calculPoints', () => {
    it ('should return 17 if dices are 1,2,3,5,6', () => {
        expect(calculPoints([1,2,3,5,6])).toBe(17);
    });

    it('should return 50 if dices are 1,1,1,1,1', () => {
        expect(calculPoints([1,1,1,1,1])).toBe(50);
    });

    it('should return 40 if dices are 1,2,3,4,5', () => {
        expect(calculPoints([1,2,3,4,5])).toBe(40);
    });

    it('should return 20 if dices are 1,1,1,1,6', () => {
        expect(calculPoints([1,1,1,1,6])).toBe(35);
    });

    it('should return 20 if dices are 1,1,1,2,3', () => {
        expect(calculPoints([1,1,1,2,3])).toBe(28);
    })
});