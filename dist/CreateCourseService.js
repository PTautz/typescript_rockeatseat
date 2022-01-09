"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    //outra forma
    //execute(data: Course) {
    //console.log(data.name, data.duration, data.educator);
    execute({ duration = 8, educator, name }) {
        console.log(name, duration, educator);
    }
}
//new > para não precisar instanciar a classe para fazer a exportação
exports.default = new CreateCourseService();
