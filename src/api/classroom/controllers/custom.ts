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
    }
}