const news = require("./data/news");

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.render('pages/index.ejs', { news: news })
);

app.use((req, res, next) => {
    return res.status(404).render(`pages/err404.ejs`, { url: req.url })
});

app.listen(port, () => console.log(`Listening to localhost:${port}`));

