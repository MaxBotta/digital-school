// https://www.geeksforgeeks.org/dsa/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
// A function to generate a random
// permutation of arr
export function shuffle(arr) {
    const list = [...arr];
    // Start from the last element and swap
    // one by one. We don't need to run for
    // the first element that's why i > 0
    for (let i = list.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i inclusive
        let j = Math.floor(Math.random() * (i + 1));

        // Swap arr[i] with the element
        // at random index
        [list[i], list[j]] = [list[j], list[i]];
    }

    return list;
}
