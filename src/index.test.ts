import { calculPoints } from './index';


describe('calculPoints', () => {
    it ('should return 17 if dices are 1,2,3,5,6 meaning Chances', () => {
        expect(calculPoints([1,2,3,5,6])).toBe(17);
    });

    it('should return 50 if dices are 1,1,1,1,1 meaning YAMS', () => {
        expect(calculPoints([1,1,1,1,1])).toBe(50);
    });

    it('should return 40 if dices are 1,2,3,4,5 meaning Straight', () => {
        expect(calculPoints([1,2,3,4,5])).toBe(40);
    });

    it('should return 35 if dices are 1,1,1,1,6 meaning Carre', () => {
        expect(calculPoints([1,1,1,1,6])).toBe(35);
    });

    it('should return 35 if dices are 1,1,6,1,1 meaning Carre', () => {
        expect(calculPoints([1,1,6,1,1])).toBe(35);
    });

    it('should return 28 if dices are 1,1,1,2,3 meaing Brelan', () => {
        expect(calculPoints([1,1,1,2,3])).toBe(28);
    });

    it('should return 28 if dices are 1,3,1,2,1 meaing Brelan', () => {
        expect(calculPoints([1,3,1,2,1])).toBe(28);
    })

    it('should return 30 if dices are 1,1,1,2,2 meaning Fullhouse', () => {
        expect(calculPoints([1,1,1,2,2])).toBe(30);
    });

    it('should return 30 if dices are 1,2,1,2,1 meaning Fullhouse', () => {
        expect(calculPoints([1,2,1,2,1])).toBe(30);
    });
});