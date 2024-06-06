import app from './config/express.config'
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { User } from './entity/user.entity'
import Encryption from './utilities/encryption.utility'
// import { Routes } from "./routes"

AppDataSource.initialize().then(async (connection) => {
    console.log(connection)

    // create express app
    app.use(bodyParser.json())

    // start express server
    app.listen(3000)
    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
