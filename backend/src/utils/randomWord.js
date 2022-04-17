import { readFile } from "fs/promises"

export async function getRandomWord(wordLength, unique) {
    const WORDS = JSON.parse(
        await readFile(new URL("../json/words_dictionary.json", import.meta.url))
    );

    const wordArr = Object.keys(WORDS)
        .filter((word) => word.length == wordLength)
        .filter((word) => {
            if (unique === "false") {
                return true;
            }

            const letters = Array.from(word);
            for (let i = 0; i < letters.length; i++) {
                const letter = letters[i];
                if (letters.filter((l) => l == letter).length > 1) {
                    return false;
                }
            }
            return true;
        });

    const randomIndex = Math.floor(Math.random() * wordArr.length);
    console.log(wordArr[randomIndex]);
    return wordArr[randomIndex];
}
