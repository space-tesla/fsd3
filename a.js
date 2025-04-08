const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const users = {
    "admin": "admin123",
    "user": "user123"
};

app.get("/", (req, res) => {
    res.send(`
        <h2>User Login</h2>
        <form action="/login" method="post">
            <label>Username:</label>
            <input type="text" name="username" required/><br><br>
            <label>Password:</label>
            <input type="password" name="password" required/><br><br>
            <button type="submit">Login</button>
        </form>
    `);
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (users[username] && users[username] === password) {
        res.send(`<h2>Login Successful! Welcome, ${username}.</h2>`);
    } else {
        res.send(`<h2>Invalid Credentials. <a href="/">Try Again</a></h2>`);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
