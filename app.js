import express from "express";


//create app
const app = express();

//View engine
app.set("view engine", "EJS");

//port
const PORT = 3003;

const friends = [];

app.use(express.urlencoded({ extended: true}));

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render('resume');
});

app.get("/contact", (req, res) =>{
    //res.sendFile(`${import.meta.dirname}/views/home.html`);
    res.render("home");
});

app.get("/admin", (req,res)=>{
    res.render("admin", { friends });
});

app.post("/submit", (req, res) =>{
    // fname= lname=jhbn& job=& company=& link=& email=& meet=in-person&o ther=& Message=
    const contact = {
        fname: req.body.fname,//req
        lname: req.body.lname,//req
        job: req.body.job ? req.body.job: "null",
        company: req.body.company ? req.body.company: "null",
        link: req.body.link ? req.body.link: "null",
        email: req.body.email ? req.body.email: "null",
        meet: req.body.meet,//req
        other: req.body.other ? req.body.other: "null",
        Message: req.body.Message ? req.body.Message: "null",
        mailingList: req.body.theList ? req.body.theList: "no",
        mailingListType: req.body.emailType ? req.body.emailType: "no",
        timestamp: new Date()
    };

    friends.push(contact);

    //res.sendFile(`${import.meta.dirname}/views/conf.html`);
    res.render("conf", {contact});
});

app.listen(PORT, () => {
    console.log(`app running at http://localhost:${PORT}`);
});