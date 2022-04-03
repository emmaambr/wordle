import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

/*
app.get("/", async (req, res) => {
    
    res.json("game");
}); 

app.post("/api/highscore", async (req, res) => {
    
    res.json("highscore");
}); 
*/

app.get("/info", async (req, res) => {
    let info = "Hej";

    res.json(info); 
}); 

export default app;