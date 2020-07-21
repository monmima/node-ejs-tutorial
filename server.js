const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
/**
 * path is a core module of node
 */
const path = require("path");

var app = express();

// app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/**
 * concatenate the current working directory
 * and a folder called views
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(request, response) {
    response.render("index", {
        // insert values
        foo: "bar",

        // iterate over values
        people: [
            { name : "dave" },
            { name : "jerry" }
        ],

        // condition
        animals: [
            { name : "cat" },
            { name : "dog" },
            { name : "horse" },
            { name : "cow" }
        ]
    });
});

app.listen(3000, function() {
    console.log("Running on port 3000!");
});

