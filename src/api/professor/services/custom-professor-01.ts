import { factories } from "@strapi/strapi";

export default factories.createCoreService('api::professor.professor' , ({ strapi }) => ({
    async nameToUppercase(){
        try{
            const professors = await strapi.documents('api::professor.professor').findMany();

            const updateProfessors = [];

            for (const professor of professors){
                if(professor.name){
                    const professorToUpper = professor.name.toUpperCase();

                    const updateProfessor = await strapi.documents('api::professor.professor').update({
                        documentId: professor.documentId,
                        data: {
                            name: professorToUpper
                        },
                        status: 'published',
                    });
                    updateProfessors.push(updateProfessor);
                }
                
            }

            return { success: true, count: updateProfessors.length, data: updateProfessors };

        }catch(error){
            return { success: false, error: error.message};
        }
    },  
}));