import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()

const PORT = 9090
const server = express()

server.use(express.json())
server.use(cors())

import usersRoute from "./Routes/users.js";
import productsRoute from "./Routes/products.js"
import loginRoute from "./Routes/login.js";

server.use("/", usersRoute)
server.use("/", productsRoute)
server.use("/", loginRoute)


mongoose.connect(process.env.MONGODB_URL)


const db = mongoose.connection
db.on("error", console.error.bind(console, "Connessione al database non riuscita."))
db.once("open", () => {
    console.log("Connessione al database stabilita.")
})

server.listen(PORT, () => console.log(`Server avviato sulla porta ${PORT}.`))