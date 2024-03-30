import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = 'https://v2.jokeapi.dev/joke/Any';

app.use(express.static("public"));

app.get('/', async (req , res)=>{
    try {
        const response = await axios.get(API_URL,{
            params:{
                type: "single",
            },
        });
        const result = response.data;
        // console.log(result.data);
        res.render("index.ejs",{
            result: result,
        });
    } catch (error) {
       res.send(error.message); 
    }
})

app.post("/" ,(req , res)=>{
    res.send("Success");
})

app.listen(port , () =>{
    console.log(`Website is running on ${port} port`);
});