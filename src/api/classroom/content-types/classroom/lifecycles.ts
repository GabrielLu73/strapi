export default {
    beforeCreate(event) {
      const { data } = event.params;
  
      // Convertir el título a mayúsculas
      if (data.title) {
        data.title = data.title.toUpperCase();
      }
    },
  };