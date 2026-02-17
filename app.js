import express from "express";

//create app
const app = express();

//port
const PORT = 3000;

const friends = [];

app.use(express.urlencoded({ extended: true}));

app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get("/admin", (req,res)=>{
    res.send(friends);
});

app.post("/submit", (req, res) =>{
    // fname= lname=jhbn& job=& company=& link=& email=& meet=in-person&o ther=& Message=
    const contact = {
        fname: req.body.fname,//req
        lname: req.body.lname,//req
        job: req.body.job ? req.body.job: "none",
        company: req.body.company ? req.body.company: "none",
        link: req.body.link ? req.body.link: "none",
        email: req.body.email ? req.body.email: "none",
        meet: req.body.meet,//req
        other: req.body.other ? req.body.other: "none",
        Message: req.body.Message ? req.body.Message: "none"
    };

    friends.push(contact);

    res.sendFile(`${import.meta.dirname}/views/conf.html`);
});

app.listen(PORT, () => {
    console.log(`app running at http://localhost:${PORT}`);
});