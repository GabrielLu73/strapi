import { factories } from "@strapi/strapi";

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
    async publishClass(professorid: string ,classid: string){
        try {
            const publishClass = await strapi.documents('api::classroom.classroom').publish({
                documentId: classid,
                filters: {
                    professors: {
                        documentId: professorid,
                    }
                }
            });

            console.log(publishClass)
        } catch (error) {
            console.log('Esto es el error que sale', error)
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

                const classesToDisconnect = activeClass.length - limit;
                const disconnectedClasses = [];

                for(let i = 0; i < classesToDisconnect; i++){
                    const classToDisconnect = activeClass[i];

                    await strapi.documents('api::classroom.classroom').update({
                        documentId: classToDisconnect.documentId,
                        data: {
                            professors: {
                                disconnect: [professorId]
                            }
                        }
                    });

                    disconnectedClasses.push(classToDisconnect);
                    await this.publishClass(professorId, classToDisconnect.documentId);
                }
                
                return {
                    success: true,
                    message: `Se desvinculó ${disconnectedClasses.length} la clase más reciente del profesor para mantener el límite de ${limit}`,
                    unlinkedClass: disconnectedClasses,
                };
            }

            return {
                success: true,
                message: `El profesor tiene ${activeClass.length} clases activas (límite: ${limit})`
              };
            

        }catch(error){
            console.log(error);
        }
    }, 
    
}));