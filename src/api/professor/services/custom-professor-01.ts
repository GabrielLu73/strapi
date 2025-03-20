import { factories } from "@strapi/strapi";
import { errors } from '@strapi/utils';
const { ApplicationError } = errors;

export default factories.createCoreService('api::professor.professor' , ({ strapi }) => ({
    async nameToUppercase(){
        try{
            const professors = await strapi.documents('api::professor.professor').findMany();

            const updateProfessors = [];

            for (const professor of professors){
                if(professor.name){
                    const professorNameToUpper = professor.name.charAt(0).toUpperCase() + professor.name.slice(1).toLowerCase();
                    const professorLastToUpper = professor.lastname.charAt(0).toUpperCase() + professor.lastname.slice(1).toLowerCase();

                    const updateProfessor = await strapi.documents('api::professor.professor').update({
                        documentId: professor.documentId,
                        data: {
                            name: professorNameToUpper,
                            lastname: professorLastToUpper
                        },
                        status : 'published',

                    });
                    updateProfessors.push(updateProfessor);
                }
                
            }

            return { success: true, count: updateProfessors.length, data: updateProfessors };

        }catch(error){
            return { success: false, error: error.message};
        }
    },
    async customLimit(professorId : string, limit: number){
        try{

            const activeClass = await strapi.documents('api::classroom.classroom').findMany({
                filters: {
                    professors: {
                        documentId: professorId,
                        status: 'published',
                    }
                }
            });

            if(activeClass.length >= 5){
                throw new ApplicationError(
                    `El profesor no puede tener más de ${limit} clases activas`,
                    { professorId, currentCount: activeClass.length}
                );
            }

            return { allowed: true, currentCount: activeClass.length}
            

        }catch(error){
            console.log(error);
        }
    }
}));