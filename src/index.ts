export class Jet {
    private dices : number[];
    constructor(dices : number[]){
        this.dices = dices;
    }

    getDices(){
        return this.dices;
    }
}

export function calculPoints(jets : Jet[]) {
    
    let dices = jets[0].getDices();

    dices.sort((a,b) => a - b);
    if (dices[0] === dices[4]) return 50;

    if(dices[0] === dices[3] || dices[1] === dices[4]) return 35;

    if(dices[0] === dices[2] || dices[1] == dices[3] || dices[2] === dices[4]){
        if (dices[0] === dices[2] && dices[3] === dices[4] || 
            dices[2] === dices[4] && dices[0] === dices[1])
            return 30;
        return 28;
    }

    let isStraight = true;
    let points = 0;
    for (let i = 0; i < dices.length - 1; i++){
        if(dices[i] + 1 !== dices[i + 1]){
            isStraight = false;
        }
        points += dices[i];
    }

    return isStraight ? 40 : points += dices[4];
}