const express = require('express');
const RecipeRouter = require("./Routes/Reacipe-Router.js");

const app = express();
app.use(express.json())
app.use('/', RecipeRouter);

module.exports= app;