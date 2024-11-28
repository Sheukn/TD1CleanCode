export function calculPoints(dices : [number,number,number,number,number]) {
    let points = 0;
    for (let i = 0; i < dices.length; i++){
        points += dices[i];
    }
    return points;
}