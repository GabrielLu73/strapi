export default {
    routes: [
        {
            method: 'GET',
            path: '/professors/pfsPopulate',
            handler: 'pfs-populate.findProfessors',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};