export default {
    beforeCreate(event) {
      const { data } = event.params;
  
      // Convertir el título a mayúsculas
      if (data.title) {
        data.title = data.title.toUpperCase();
      }
    },
    beforeUpdate: async (event) => {
      const { data } = event.params;
      const DISCONNECT = 'disconnected'

      if(data.status === DISCONNECT){
        await strapi.documents('api::classroom.classroom').update({
          documentId: event.params.data.documentId,
          data: event.params.data,
          status: 'published'
        });
      }
    }
  };