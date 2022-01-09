import { Request, Response } from 'express' 
import CreateCourseService from './CreateCourseService';

//a ideia é passar a função para as rotas 
export function createCourse(request : Request, response: Response) {

    CreateCourseService.execute({
        name:"NodeJS",
        educator: "Jojoca"
    });
    
    CreateCourseService.execute({
        name:"Donatello.JS",
        duration: 10,
        educator: "Donatello"
    });

    return response.send({ message: "How long, how long will I slide? separate my side...How long? "});
}