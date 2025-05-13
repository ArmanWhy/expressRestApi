import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/connectDB.js';
import web from './routes/web.js';
import cors from 'cors'


//env file configuration
dotenv.config()

//taking port and DB name from env file
const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// creating connection
connectDB(DATABASE_URL)

const app = express();
app.use(express.json())

app.use(cors());

//the base usrl for shop controller
app.use('/shop', web)


app.listen(PORT, ()=> {
    console.log(`Development Started at : http://localhost:${PORT}`)
})


