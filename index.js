const x = require("express")
const ejs = require("ejs")
const app = x()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {});
});

app.listen(port, () => console.log(`App listening on port ${port}!`));