module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/eventos/eventDate',
        handler: 'custom.findEventsByDate',
        config: {
            policies: [],
            middlewares: [],
        },
      },
      {
        method: 'GET',
        path: '/eventos/eventByDZ',
        handler: 'custom.findByDZ',
        config: {
            policies: [],
            middlewares: [],
        },
      }
    ],
    //main
  };