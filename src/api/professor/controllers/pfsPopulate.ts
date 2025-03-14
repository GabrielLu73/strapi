export default {
    async findProfessors(ctx){
        try{
            const eventName = ctx.query.eventName;
            const allProfessor= await strapi.documents('api::professor.professor').findMany({
                filters: {
                    events: {
                        title: {
                            $eq: eventName
                        }
                    }
                },
                populate: ['events'],
            });

            if(allProfessor.length === 0){
                return ctx.send({message: `No hay datos para poblarlo de ${eventName}`});
            }

            return ctx.send({message: `Nombre del evento ${eventName}`, data: allProfessor});
        }catch(error){
            return ctx.badRequest('Error', {error})
        }
    }
};