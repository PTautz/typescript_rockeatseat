/**
 * name - string
 * duration - number
 * educator - string
 */
interface  Course {
    name: string;
    duration?: number;
    educator: string
}

class CreateCourseService {
    //outra forma
    //execute(data: Course) {
        //console.log(data.name, data.duration, data.educator);

    execute({duration = 8, educator, name}: Course) {
        console.log(name, duration, educator);
    }
}

//new > para não precisar instanciar a classe para fazer a exportação
export default new CreateCourseService();

