import express from "express";
import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();

//create app
const app = express();

//View engine
app.set("view engine", "ejs");

//port
const PORT = 3003;

const friends = [];

app.use(express.urlencoded({ extended: true}));

app.use(express.static("public"));

//DATABASE 
//create a pool bucket of database connections
const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
}).promise();

app.get("/", (req, res)=>{
    res.render('resume');
});

app.get("/contact", (req, res) =>{
    //res.sendFile(`${import.meta.dirname}/views/home.html`);
    res.render("home");
});

app.get("/admin", async (req,res)=>{

    let sql = "SELECT * FROM contacts ORDER BY timestamp DESC";
    const friends = await pool.query(sql);

    res.render("admin", { friends:friends[0] });
});

app.post("/submit", async (req, res) =>{
    // fname= lname=jhbn& job=& company=& link=& email=& meet=in-person&o ther=& Message=
    const contact = req.body;
    const contactS = [
        req.body.fname,
        req.body.lname,
        req.body.job || "none",
        req.body.company || "none",
        req.body.link || "none",
        req.body.email || "none",
        req.body.meet || "none",
        req.body.other || "none",
        req.body.Message || "none",
        req.body.theList || "none",
        req.body.emailType || "none"
    ];

    const sql = `INSERT INTO contacts (fname, lname, job, company, link, email, meet, other, message, mailingList, mailingListType) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const result = await pool.execute(sql, contactS);

    friends.push(contact);

    //res.sendFile(`${import.meta.dirname}/views/conf.html`);
    res.render("conf", {contact});
});

app.listen(PORT, () => {
    console.log(`app running at http://localhost:${PORT}`);
});