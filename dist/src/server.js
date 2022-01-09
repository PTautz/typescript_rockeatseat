"use strict";
/*
Importar express no javascript:
const express = require("express")
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Import express no typescript
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
/*
app.get("/", (request, response) => {
    return response.json ({ message: "How long, how long will I slide? separate my side...How long? "})
});
*/
app.get("/", createCourse);
app.listen(3333, function () {
    console.log("Server Ready...");
});
