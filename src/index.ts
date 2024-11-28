export function calculPoints(dices : [number,number,number,number,number]) {
    let points = 0;
    dices.sort();
    let isStraight = true;

    if (dices[0] === dices[4]) {
        // YAMS
        return 50;
    }

    if(dices[0] === dices[3] || dices[1] === dices[4]){
        return 35;
    }

    for (let i = 0; i < dices.length - 1; i++){
        if(dices[i] + 1 !== dices[i + 1]){
            isStraight = false;
        }
        points += dices[i];
    }

    points += dices[dices.length - 1];

    if (isStraight) {
        return 40;
    }

    return points;
}