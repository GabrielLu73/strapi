export default{
    async allClass(ctx) {
        try {
            const classrooms = await strapi.documents('api::classroom.classroom').findMany({
                populate:{
                    classroomDetails:{
                        fields: '*',
                    },
                    professors:{
                        fields: '*',
                    }
                }
            });
    
            return ctx.send({message: 'toda la información de las clases', data: classrooms})
        }catch(error){
            return ctx.badRequest('No encontrado', {error})
        }
    },
    async addProfessorToClass(ctx){
        try{    
            const { className, professorId } = ctx.request.body;

            if(!className || !professorId){
                return ctx.badRequest('Nombre de la clase y el Id del profesor son requeridos',{ className,professorId });
            }

            const classByName = await strapi.documents('api::classroom.classroom').findMany({
                filters:{
                    title: {
                        $eq: className,
                    }
                }
            }); 

            if(!classByName.length){
                return ctx.notFound('Clase no encontrada');
            }

            const professorById = await strapi.documents('api::professor.professor').findOne({
                documentId: professorId,
            });

            if(!professorById){
                return ctx.notFound('Profesor no encontrado')
            }

            await strapi.documents('api::classroom.classroom').update({
                documentId: classByName[0].documentId,
                data:{
                    professors: {
                        connect: [professorId]
                    }
                },
                status: 'published',
            })

            return ctx.send({ok: true, message: 'Profesor asignado correctamente a la clase' });
            

        }catch(error){
            return ctx.badRequest('error no ha funcionado', {error: error.message});
        }
    }
}