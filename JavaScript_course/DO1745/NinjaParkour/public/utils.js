
//Wirft einen Fehler, wenn ein Parameter nicht angegeben wird
export function rqd() {
    throw new Error('param is required');
}
