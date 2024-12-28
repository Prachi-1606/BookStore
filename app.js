

const express=require('express')
const mongoose=require('mongoose')
const router=require("./routes/book-routes")
const cors=require('cors');
const path = require("path");
const app=express();



//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router) //localhost:5000/books
app.get("/", (req, res) => { 
    app.use(express.static(path.resolve(__dirname, "book-store", "build"))); 
    res.sendFile(path.resolve(__dirname, "book-store", "build", "index.html")); 
  }); 

mongoose.connect(
    "mongodb+srv://admin:a62x7YWtyz9iaqj1@cluster0.mktmert.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
.then(()=>console.log("Connected to Database"))
 .then(()=>{
    app.listen(5000)
 }).catch((err)=>console.log(err));



//a62x7YWtyz9iaqj1
//mongodb password:sM5pr67H0jgRfaBy