import express from "express";
import router from "./Routes/router.js";


const app = express();
const PORT = process.env.PORT || 3000;

//middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/", router);

app.listen (PORT, ()=> console.log(`Server running on port http://localhost:${PORT}`));