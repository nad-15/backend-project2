import express from "express";

//import routes
import movieRoutes from "./routes/movieRoutes.js"

const app = express()

//API Routes

app.use("/movies", movieRoutes)

app.get("/hello", (req, res)=> {
    res.json({message: "Hello our there rom hello"});
});

const PORT = 5001;
app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`)
})


