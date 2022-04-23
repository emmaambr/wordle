import express from "express";
import { engine } from 'express-handlebars';
import mongoose from "mongoose";
import cors from "cors";
import * as uuid from "uuid";

import { getRandomWord } from "./utils/randomWord.js";
import { feedback } from "./utils/feedback.js";
import GameHighscore from "./db/models.js";

const uri = "mongodb+srv://emmaamber:JjsAZbwsF98Lu6GD@cluster0.mwsau.mongodb.net/highscoreDB?retryWrites=true&w=majority";
const app = express();

app.use(express.json());
app.use(cors());
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDb database succesfully connected!");

});

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
app.post("/api/games/:id/highscore", async (req, res) => {
    const game = GAMES.find((savedGame) => savedGame.id == req.params.id);
    const player = req.body.Player;

    if (game) {
        const highscore = new GameHighscore({
            ...game,
            player,
        });

        await highscore.save();

        res.status(201).json({ highscore });
    } else {
        res.status(404).end();
    }
});

// GET /api/higscores
app.get("/api/highscores", async (req, res) => {
    const highscore = await loadHighscore();
    res.json({
        highscore: highscore.map((entry) => ({
            ...entry,
            duration: new Date(entry.endTime) - new Date(entry.startTime),
        })),
    });
});

app.get("/highscore", async (req, res) => {
    res.render("highscore");
});

app.get("/info", async (req, res) => {
    res.render("info");
});

app.get("/", express.static("../frontend/build"));
// app.use(express.static(path.resolve(__dirname, '../frontend/build')));

export default app;
