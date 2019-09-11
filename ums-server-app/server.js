const express = require('express');
const appRouter = require('./routes');
const apiRouter = require('./routes/api-routes');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(['/api'], apiRouter);
app.use(['/', '/*'], appRouter);
app.listen(port, () => console.log(`UMS app listening on port ${port}!`));