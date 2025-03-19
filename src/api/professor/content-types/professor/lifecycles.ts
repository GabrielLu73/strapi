export default {
    async beforeUpdate(event) {
        const { data } = event.params;

        const professors = await strapi.documents('api::professor.professor').findMany({
            populate: {classrooms:true},
        });

        professors.forEach(professor => {
            const countClass = professor.classrooms.length;
            data.countClass = countClass;
        })
    },
  };