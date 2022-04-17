import express from "express";
import cors from "cors";
import * as uuid from "uuid";
import { getRandomWord } from "./utils/randomWord.js";
import { feedback } from "./utils/feedback.js";

const app = express();

app.use(express.json());
app.use(cors());
//app.use(express.static(path.resolve(__dirname, '../frontend/build')));

const GAMES = [];

// POST /api/games
app.post("/api/games", (req, res) => {
    const wordLength = req.body.WordLength;
    const unique = req.body.Unique;

    const game = {
        correctWord: getRandomWord(wordLength, unique),
        guesses: [],
        id: uuid.v4(),
        wordLength: wordLength,
        unique: unique,
    };
    GAMES.push(game);
    console.log(game);

    res.status(201).json({ id: game.id, wordLength, unique });
})

// POST /api/games/:id/guesses
app.post("/api/games/:id/guesses", (req, res) => {
    const game = GAMES.find((savedGame) => savedGame.id == req.params.id);

    if (game) {
        const guess = req.body.guess;
        const result = feedback(game.correctWord, guess);
        game.guesses.push(guess);  

        if (guess === game.correctWord) {
           // game.endTime = new Date();

            res.status(201).json({
                guesses: game.guesses,
                result: game,
                correct: true,
            });
            return;
        } else {
            res.status(201).json({
                guesses: game.guesses,
                correct: false,
            });
        }
    } else {
        res.status(404).end();
    }
});

// POST /api/games/:id/highscore


// GET /api/higscores


app.get("/", express.static("../frontend/build"));

export default app;
