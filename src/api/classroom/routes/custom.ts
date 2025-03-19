module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/classrooms/allClass',
        handler: 'custom.allClass',
        config: {
            policies: [],
            middlewares: [],
        },
      },
      {
        method: 'POST',
        path: '/classrooms/addProfessorToClass',
        handler: 'custom.addProfessorToClass',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };