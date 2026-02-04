const express = require('express')

const app = express()

app.get("/hello", (req, res)=> {
    res.json({message: "Hello our there"});
});

const PORT = 5001;
app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`)
})


