export function feedback(correctWord, guess) {
    const output = [];
    const guessArr = Object.values({guess}).toString().toUpperCase().split("");
    const correctWordArr = Object.values({correctWord}).toString().toUpperCase().split("");

    for(let i = 0; i < correctWordArr.length; i++) {
        if (guessArr[i] === correctWordArr[i]) {
            output.push({
                letter: guessArr[i],
                color: "#b6fc03"
            });
            correctWordArr.splice(i, 1, 1);
            guessArr.splice(i, 1, 1);
        }
        if (guessArr[i] != correctWordArr[i] && correctWordArr ) {
            output.push({
                letter: guessArr[i],
                color: "#ff4f2b"
            });
        }
    } 
    for(let i = 0; i < correctWordArr.length; i++) {
        if (correctWordArr.includes(guessArr[i]) && guessArr[i] != correctWordArr[i])  {
            output.splice(i, 1, {
                letter: guessArr[i],
                color: "#ffff70"
            }); 
        }
    } 
    console.log(output);
    return output;
}

feedback();
