import { Core } from "@strapi/strapi";
import { factories } from '@strapi/strapi'
import { Context} from 'koa'

export default factories.createCoreController('api::professor.professor', ({ strapi } : {strapi : Core.Strapi}) => ({
    async convertNames(ctx: Context){
        try {
            const result = await strapi.service('api::professor.custom-professor-01').nameToUppercase();
            ctx.send(result);
        }catch (error){
            console.log(error);
        }
    },
}));