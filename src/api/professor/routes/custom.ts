export default{
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
      {
        method: 'GET',
        path: '/professors/pfsPopulate',
        handler: 'custom.findProfessors',
        config: {
            policies: [],
            middlewares: [],
        },
      },
    ],
    
  };
  