import express from "express";
import mongoose from "mongoose";
import Data from './data.js'
import Video from './videoSchema.js'
import cors from 'cors'


// app config
const app = express();
const port = process.env.PORT || 5173;

// middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

//DB config
const connection_url = 'mongodb+srv://admin:N0XKhohuQQIrt9xF@cluster0.xw8kooi.mongodb.net/tiktokclone?retryWrites=true&w=majority';

mongoose.connect(connection_url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);


// app routes
app.get('/', (req, res) => {
    res.status(200).send("Working...");
})
app.get('/v1/posts', (req, res) => res.status(200).send(Data));


// Here we will create a request for add some video post. 
app.post('/v2/post', (req, res) => {
    const dbVideo = req.body;
    Video.create(dbVideo)
        .then((result) => {
            res.status(201).send(result)
        }).catch((err => { res.status(500).send(err) }))
});
// Now her ewe are create am end point to retrive data from db.
app.get('/v2/post', async (req, res) => {
    const AllData = await Video.find({});
    if (AllData) {
        res.status(200).send(AllData)
    }
    else {
        res.status(500).send("Something went wrong. From server side.")
    }
})

// app listioner
app.listen(port, () =>
    console.log(`server runing at http://127.0.0.1:${port}`)
);