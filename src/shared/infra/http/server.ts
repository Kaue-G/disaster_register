import express, { Request, Response } from 'express'
import 'reflect-metadata'
import { AppDataSource } from '../typeorm'

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json())

    app.get('/', (request: Request,
        response: Response,) => {
        return response.json('tudo certo')
    })

    return app.listen(process.env.SERVER_PORT, () => console.log("server on"))
})
.catch(
    (err) => console.log(err)
)
