import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const PORT = 3000;

app.use(cors());

app.get('/', (_req, res: express.Response) => {
   res.sendFile(__dirname + '/index.html');
});

app.post('/api/movies', (req: express.Request, res: express.Response) => {
   // Take info 
   const dataJSON = JSON.parse(fs.readFileSync(__dirname + '/movies.json', 'utf8'));
   const { movies }: { movies: Array<Record<string, string>> } = dataJSON;
   const search = req.body.search

   // Filter with user input.
   const regex = new RegExp(`^${search}`, 'i');
   const collectionMovies = movies.filter((element) => {
      return element.title.match(regex);
   });

   const moviesObject = { movies: collectionMovies };
   res.status(200).send(moviesObject);
});

app.listen(PORT, () => {
   console.log(`Servidor escuchando en http://localhost:${PORT}`);
});