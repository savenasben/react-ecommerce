const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');


dotenv.config({path: './.env'});
const app = express();


app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

app.use("/api/tasks", taskRoutes);
app.use('/api/auth', require('./routes/authRoutes'));


app.get("/", (req, res) => {
    res.send("API is running......")
   }
)
 

const PORT = process.env.PORT || 5000;
const dbURI = process.env.dbURI;
mongoose.connect(dbURI)
   .then(() => console.log("Connected to MongoDB"))
   .catch((error) => console.log(error))

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})