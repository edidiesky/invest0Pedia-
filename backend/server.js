import express from 'express'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config();

const app = express()
import connectDb from './db/connect.js'
import {
    errorHandler,
    NotFound
} from './middleware/error-handler.js'


import mongoose from "mongoose" 

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID)
})

import transactionRoute from './routes/transactionRoute.js';
import investmentRoute from './routes/investmentRoute.js';
import userRoute from './routes/userRoute.js';
import coinCartRoute from './routes/coinCartRoute.js';
import marketRoute from './routes/marketRoute.js';
import uploadRoute from './routes/uploadRoute.js';
import walletRoute from './routes/walletRoute.js';

// route
app.use('/api/v1/transaction', transactionRoute);
app.use('/api/v1/auth', userRoute);
app.use('/api/v1/investment', investmentRoute);
app.use('/api/v1/coincart', coinCartRoute);
app.use('/api/v1/market', marketRoute);
app.use('/api/v1/upload', uploadRoute);
app.use('/api/v1/wallet', walletRoute);

const __dirname = path.resolve()

app.use('/public/uploads', express.static(path.join(__dirname, '/public/uploads')))


mongoose.connect(process.env.MONGO_URl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('mongo has been connected');
})

// production mode process

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/Frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'Frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}


// Middlewares

app.use(NotFound)
app.use(errorHandler)




app.listen(4000, () => {
    console.log('server is listening on port 4000');
})

