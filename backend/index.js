const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');

const connectDB = require("./db");
const urlRouter = require("./routes/urlRoutes");
const { accessURL } = require('./controller/urlController');


dotenv.config();

const corsOptions = {
    origins: ["http://localhost:3000"],
    methods: ["GET","POST"],
    allowdHeaders: ["Content-Type"]
}


const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use("/",urlRouter);
app.use("/:shortcode",accessURL);




app.listen(5000,()=>{
    connectDB(process.env.MONGO_DB_URL);
    console.log("Server is running on port 5000");
})