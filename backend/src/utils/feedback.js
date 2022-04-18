export function feedback(correctWord, guess) {
    const output = [];
    const guessArr = Object.values({guess}).toString().toUpperCase().split("");
    const correctWordArr = Object.values({correctWord}).toString().toUpperCase().split("");

    for(let i = 0; i < correctWordArr.length; i++) {
        if (guessArr[i] === correctWordArr[i]) {
            output.push({
                letter: guessArr[i],
                color: "green"
            });
            correctWordArr.splice(i, 1, 1);
            guessArr.splice(i, 1, 1);
        }
        if (guessArr[i] != correctWordArr[i] && correctWordArr ) {
            output.push({
                letter: guessArr[i],
                color: "red"
            });
        }
    } 
    for(let i = 0; i < correctWordArr.length; i++) {
        if (correctWordArr.includes(guessArr[i]) && guessArr[i] != correctWordArr[i])  {
            output.splice(i, 1, {
                letter: guessArr[i],
                color: "yellow"
            }); 
        }
    } 
    console.log(output);
    return output;
}

feedback();
