const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;
let path=require("path");

let routes=require("./routes/index.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.post('/process-contact', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const contactNumber = req.body.contactNumber;
    const email = req.body.email;
    const message = req.body.message;

    res.redirect('/');
});

app.set("views", path.join(__dirname,"./views"));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(path.join(__dirname,"./public")));
app.use(express.static(path.join(__dirname,"./node_modules")));
app.use("/", routes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});