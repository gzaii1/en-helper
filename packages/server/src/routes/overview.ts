import type Router from '@koa/router'
import { sequelize } from '../models'
import { Person } from '../models/person'

export default function Overview(router: Router): Router {
    return router.get('/overview', async (ctx) => {
        await sequelize.authenticate()
        const res = await Person.findAll({ 
            where: { 
                firstName: 'alex'
            } 
        })
        console.log(res)
    })
}
