export function calculPoints(dices : [number,number,number,number,number]) {
    let points = 0;
    dices.sort();

    if (dices[0] === dices[4]) {
        // YAMS
        return 50;
    }
    
    for (let i = 0; i < dices.length; i++){
        points += dices[i];
    }
    return points;
}