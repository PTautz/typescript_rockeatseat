"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
//a ideia é passar a função para as rotas 
function createCourse(request, response) {
    CreateCourseService_1.default.execute({
        name: "NodeJS",
        educator: "Jojoca"
    });
    CreateCourseService_1.default.execute({
        name: "Donatello.JS",
        duration: 10,
        educator: "Donatello"
    });
    return response.send({ message: "How long, how long will I slide? separate my side...How long? " });
}
exports.createCourse = createCourse;
