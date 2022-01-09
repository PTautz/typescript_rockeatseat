"use strict";
/**
 * name - string
 * duration - number
 * educator - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute(name, duration, educator) {
        console.log(name, duration, educator);
    }
}
//new > para não precisar instanciar a classe para fazer a exportação
exports.default = new CreateCourseService();
