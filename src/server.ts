/*
Importar express no javascript:
const express = require("express")
*/

//Import express no typescript
import express from 'express';
import { createCourse } from './routes';


const app = express();

/*
app.get("/", (request, response) => {
    return response.json ({ message: "How long, how long will I slide? separate my side...How long? "})
});
*/

app.get("/", createCourse);

app.listen(3333, function () {
    console.log("Server Ready...")
});