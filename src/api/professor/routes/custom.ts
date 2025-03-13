
  // src/api/evento/routes/custom.ts

module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/professors/custom',
        handler: 'custom.custom', // Usamos "custom.custom" para hacer referencia correctamente al método 'custom' dentro del controlador
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  