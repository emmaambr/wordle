import { readFile } from "fs/promises"

export async function getRandomWord() {
    const WORDS = JSON.parse(
        await readFile(
            new URL("./json/words_dictionary.json", import.meta.url)
        )
    );

    const wordArr = Object.keys(WORDS);

    const randomIndex = Math.floor(Math.random() * wordArr.length);
    console.log(wordArr[randomIndex]);
    return wordArr[randomIndex];
}

export default getRandomWord; 
