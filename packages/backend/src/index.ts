import express from 'express';
import { join } from 'path';

const app = express();
const port = 5000;

const v2Path = join(__dirname, '../frontends');
app.use(express.static(v2Path));

app.get('/v1', (req, res) => {
  res.sendFile(join(__dirname, '../frontends', 'v1/index.html'));
});

app.get('/', (req, res) => {
  res.redirect('/frontend-v2/#');
});

app.listen(port, () => console.log(`Running on port ${port}`));
