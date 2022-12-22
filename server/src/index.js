import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()

const PORT = 5001

const app = express();

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
   
})