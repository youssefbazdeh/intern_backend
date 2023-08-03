import express, { urlencoded } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import { json } from 'express';
import internshipRoutes from './routes/internship.js'


const app = express();

const port = process.env.PORT || 9000;


const database = 'internship'
connect(`mongodb://localhost:27017/${database}`)
    .then(() => console.log("connected"))
    .catch((error) => console.log(error));

app.use(cors());
app.use(morgan("dev"));
app.use(json()); 
app.use(urlencoded({ extended: true }));



app.use((req, ers, next) => {
    console.log("middleware just ran");
    next();
});


// pr�fixe chaque route ici
app.use('/internship', internshipRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});