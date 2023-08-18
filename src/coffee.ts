import express from "express";

export const coffee = express();

coffee.get("/coffeelover", (req, res) => res.send("I like coffee!"));
