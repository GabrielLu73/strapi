import { Context } from 'koa'; 

export default {
  async custom(ctx: Context) {
    try {
      const professors = await strapi.db.query('api::professor.professor').findOne();
      ctx.send({ message: 'Datos obtenidos correctamente', data: professors });
    } catch (error) {
      ctx.send({ message: 'Error al obtener datos', error: error.message }, 500);
    }
  },
};

