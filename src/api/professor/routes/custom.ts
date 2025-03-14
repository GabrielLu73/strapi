module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/professors/custom',
        handler: 'custom.custom', 
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  