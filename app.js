const cors= require('cors')
const path = require('path');
const express = require('express');
const session= require('express-session')
const cookieParser = require('cookie-parser');
const apiRoute= require('./routes/api.routes.js')
const { apiReqLogger }= require('./middlewares/logger-api-req.middleware.js')


const app = express();
const PORT = 8000;


app.use(cors());
app.use(express.json());
// app.use(express.static("./public"))
app.use(express.static(path.join(__dirname, 'FrontEnd/dist')));
app.use(express.urlencoded({ extended: true }));  
app.use(cookieParser());


app.use(session({
    secret: '1234567890qwertyuiopqasxzxcvbnmkloitdghjhgfdgrbrfgufghfuh',
    resave: false,
    saveUninitialized: true,
    cookie: {secure : false }
}))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'FrontEnd/dist', 'index.html'));
});


app.use("/", apiReqLogger,apiRoute)




app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});
