export default {
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
        })

        if(clases.length !== data.countClass){
            data.countClass = clases.length;
        }
        
    },
  };