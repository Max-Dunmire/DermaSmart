const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const dbURI = "mongodb+srv://admin_skintelligent:melanationstation@skintelligent.ocglr.mongodb.net/Skintelligent?retryWrites=true&w=majority&appName=Skintelligent";
mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => {
    const data = { text: 'Hello World 2.0' };
    res.render('homepage', data);
});

app.use('/users', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));