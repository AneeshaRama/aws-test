import express from 'express';
import {json} from 'body-parser'
const app = express();

const port=3000;

app.use(json());

app.get("/", (req, res)=>{
    res.json({message: "Hello from the server. V2!"});
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})
