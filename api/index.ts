import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());

const PORT = 3000;

app.use(cors());

app.get('/', (_req, res: express.Response) => {
   res.sendFile(__dirname + '/index.html');
});

app.post('/movies', async (_req, res: express.Response) => {
   const movies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7be72508776961f3948639fbd796bccd&page=1`)
   return res.json(movies);
});

app.listen(PORT, () => {
   console.log(`Servidor escuchando en http://localhost:${PORT}`);
});