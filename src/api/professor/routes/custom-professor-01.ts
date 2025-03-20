export default{
    routes: [
      {
        method: 'GET',
        path: '/professors/nameUpper',
        handler: 'custom-professor-01.convertNames', 
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
    
  };