export function calculPoints(dices : [number,number,number,number,number]) {
    let points = 0;
    dices.sort();
    let isStraight = true;
    if (dices[0] === dices[4]) {
        // YAMS
        return 50;
    }

    if(dices[0] === dices[3] || dices[1] === dices[4]){
        // Carre
        return 35;
    }

    if(dices[0] === dices[2] || dices[1] == dices[3] || dices[2] === dices[4]){
        if (dices[0] === dices[2] && dices[3] === dices[4] || 
            dices[2] === dices[4] && dices[0] === dices[1]
        )
            return 30;
        return 28;
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