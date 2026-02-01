import express from "express";

//create app
const app = express();

//port
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});
app.listen(PORT, () => {
    console.log(`app running at http://localhost:${PORT}`);
})

