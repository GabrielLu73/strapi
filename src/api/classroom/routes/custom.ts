module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/classroom/allClass',
        handler: 'custom.allClass',
        config: {
            policies: [],
            middlewares: [],
        },
      },
    ],
  };