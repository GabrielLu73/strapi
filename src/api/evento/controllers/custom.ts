export default {
    async findEventsByDate(ctx){
        try{
            const eventDate = ctx.query.eventDate;
            const allEvents = await strapi.documents('api::evento.evento').findMany({
                filters: {
                    eventDetails: {
                        detailDate: {
                            $eq: eventDate,
                        }
                    }
                },
                populate: ['eventDetails'],
            });

            if(allEvents.length === 0){
                return ctx.send({message: `No hay datos para poblarlo de la fecha ${eventDate}`});
            }
    
            return ctx.send({message: `Nombre del evento ${eventDate}`, data: allEvents});

        }catch(error){
            return ctx.badRequest('No es un formato fecha', {error});
        }
    },
    async findByDZ(ctx){
        try{
            const allEvents = await strapi.documents('api::evento.evento').findMany({
                populate: {
                    eventGaleria:{
                        on: {
                            'galeria.images':{
                                populate: 'images',
                            },
                            'galeria.enlace': {
                                fields: '*',
                            },
                            'galeria.richtext':{
                                fields: '*',
                            }
                        },
                    }
                },
            });

            return ctx.send({message: `Nombre del evento`, data: allEvents});
        }catch(error){
            return ctx.badRequest('No es una zona dinámica', {error})
        }
    }
}