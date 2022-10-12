//
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// set the view engine to ejs
app.set('view engine', 'ejs');

const homeStartingContent = "Hello guys!!"
const aboutContent = "About!!"
const contactContent = "Contact!!"

let posts = [];

// Home Page
app.get('/', (req, res) => {
    res.render("home", {
        startingContent: homeStartingContent,
        posts: posts,
    })
    // console.log(posts)
});

// Contact Page
app.get('/contact', (req, res) => {
    res.render("contact", { contactContent: contactContent })
});

// About Page
app.get('/about', (req, res) => {
    res.render("about", { aboutContent: aboutContent })
});

// Compose Page
app.get('/compose', (req, res) => {
    res.render("compose")
});

app.post('/compose', (req, res) => {
    const titleInput = req.body.postTitle
    const textArea = req.body.postBody

    const post = {
        title: titleInput,
        content: textArea
    }

    posts.push(post)

    res.redirect("/")

})







app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000")
});