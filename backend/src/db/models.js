import mongoose from "mongoose";

const Schema = mongoose.Schema;
const highscoreSchema = new Schema({
    player: { type: String, require: true },
    startTime: { type: Date, require: true },
    endTime: { type: Date, require: true },
    wordLength: { type: Number, require: true },
    unique: { type: String, require: true },
});

const GameHighScore = mongoose.model("highscore", highscoreSchema);

export default GameHighScore;