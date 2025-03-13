// src/api/evento/controllers/custom.ts

import { Context } from 'koa'; // Importamos Context de Koa

export default {
  async custom(ctx: Context) {
    try {
      const professors = await strapi.db.query('api::professor.professor').findMany();
      ctx.send({ message: 'Datos obtenidos correctamente', data: professors });
    } catch (error) {
      ctx.send({ message: 'Error al obtener datos', error: error.message }, 500);
    }
  },
};

