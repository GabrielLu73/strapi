export default {
    afterCreate: async (event) => {

        if(event.params.data.documentId){
            try{
                await strapi.service('api::professor.custom-professor-01').customLimit(event.params.data.documentId, 3);
             }catch(error){
                 console.log(error);
             }
        }
    },
    beforeUpdate: async (event) =>{
        const { data } = event.params;

        console.log("professores ", {
            documentId: event.params.documentId,
            datos: event.params.data
        })

        const clases = await strapi.documents('api::classroom.classroom').findMany({
            filters:{
                professors:{
                    name: event.params.data.name,
                    lastname: event.params.data.lastname,
                    email: event.params.data.email
                }
            }
        });

        if(clases.length !== data.countClass){
            data.countClass = clases.length;
        }
        
    },
    afterUpdate: async (event) => {
        const { data } = event.params;

        console.log("professores ", {
            documentId: event.params.documentId,
            datos: event.params.data
        })

        const clases = await strapi.documents('api::classroom.classroom').findMany({
            filters:{
                professors:{
                    name: event.params.data.name,
                    lastname: event.params.data.lastname,
                    email: event.params.data.email
                }
            }
        });

        if(clases.length !== data.countClass){
            data.countClass = clases.length;
        }
    }
  };