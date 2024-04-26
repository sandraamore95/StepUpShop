const express=require('express');
const dotenv=require('dotenv').config()
const cors=require('cors')
const {mongoose}=require('mongoose')
const cookieParser=require('cookie-parser')
const shoeRoutes = require('./routes/shoeRoutes');
const collectionRoutes = require('./routes/collectionRoutes');
const offersRoutes = require('./routes/offersRoutes');
const authRoutes=require('./routes/authRoutes')
const shoeController = require('./controllers/shoeController');
const app=express();

//connection Database
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database connected!");
        // Insertar zapatillas, colecciones y ofertas iniciales
        shoeController.insertInitialData();
    })
    .catch((err) => {
        console.log("Database not connected", err);
    });

//middlware
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))

//routes
app.use('/',authRoutes)
app.use('/', shoeRoutes);
app.use('/', collectionRoutes);
app.use('/', offersRoutes);

//port 
const port=8000;
app.listen(port,()=> console.log(`Server is running on port ${port}`))




