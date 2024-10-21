const express = require("express");
const app = express();
const userRoutes = require('./src/routes/userRoutes');

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => {
    const data = { text: 'Hello World 2.0' };
    res.render('homepage', data);
});

app.use('/users', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));