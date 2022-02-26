const express = require("express");
const faker = require("faker");
var bodyparser = require('body-parser')
const app = express()

app.use(bodyparser())
app.set('views', "./views")
app.set('view engine', "ejs")

var users = []
for (let i = 0; i < 5; i++) {
    users.push({
        name: faker.name.findName(),
        Email: faker.internet.email(),
        profession: faker.name.jobTitle(),
        Country: faker.address.country()
    })
}
// console.log(users);
app.get("/", (req, res) => {
    res.render("index.ejs", { users })
})
app.get("/form/user", (req, res) => {
    res.render("form.ejs")
})
app.post('/user/add', (req, res) => {
    console.log(req.body)

    users.push({
        name: req.body.name,
        Email: req.body.email,
        profession: req.body.profession,
        Country: req.body.country
    })
    res.redirect('/');
})

app.listen(3000, () => console.log("Server is Running"));