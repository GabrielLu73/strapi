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
                    }
                },
                sort: { createdAt: 'desc' }
            });

            if(activeClass.length >= limit && activeClass.length > 0){
                const ultimaClasse = activeClass[0];
                await strapi.documents('api::classroom.classroom').update({
                    documentId: ultimaClasse.documentId,
                    data: {
                        professors: {
                            disconnect: [professorId]
                        }
                    }
                });
                return {
                    success: true,
                    message: `Se desvinculó la clase más reciente del profesor para mantener el límite de ${limit}`,
                    unlinkedClass: ultimaClasse.documentId,
                  };
            }

            return {
                success: true,
                message: `El profesor tiene ${activeClass.length} clases activas (límite: ${limit})`
              };
            

        }catch(error){
            console.log(error);
        }
    }
}));