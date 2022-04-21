import express from "express";
import cors from "cors";
import * as uuid from "uuid";
import { getRandomWord } from "./utils/randomWord.js";
import { feedback } from "./utils/feedback.js";

//import mongoose from "mongoose";
//import "dotenv/config";
// const uri = process.env.MONGODB_CONNECTION_STRING;
const app = express();

app.use(express.json());
app.use(cors());
// app.use(express.static(path.resolve(__dirname, '../frontend/build')));
/*
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established seccessfully");
})
*/

const GAMES = [];

// POST /api/games
app.post("/api/games", async (req, res) => {
    const wordLength = req.body.WordLength;
    const unique = req.body.Unique;
    const correctWord = await getRandomWord(wordLength, unique);

    const game = {
        correctWord: correctWord,
        guesses: [],
        id: uuid.v4(),
        startTime: new Date(),
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
        const correctWord = game.correctWord;
        const result = feedback(correctWord, guess);
        game.guesses.push(result);  

        if (guess === game.correctWord) {
            game.endTime = new Date();

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
