require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

//Express app
const app = express();


//Route access link
const memberRoutes = require('./routes/memberRoutes.js');

//View Engine
app.set('view engine', 'ejs');


//StaticFiles
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));



//Port
const port = process.env.PORT || '3500';

//Connect to MongoDB 
mongoose.connect(process.env.MONGODB_LINK, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})
    .then((result) => app.listen(port, () => {
        console.log(`Listening to port: ${port} and connected to Database`);
    }))
    .catch((err) => console.log(err))



//Routes
app.get('/', (req, res) => {
    res.redirect('/accounts')
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});


app.use('/accounts', memberRoutes);                     //<--All other route requests will be sent through here.

app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})