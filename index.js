/*const express = require("express");

const app = express();
app.get("/health-checkup", function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username === "priyanshu" && password === "pass") {
        if (kidneyId == 1 || kidneyId == 2) {
            res.json({
                msg: "Your kidney is fine"
            });
        } else {
            res.json({
                msg: "Invalid kidneyId"
            });
        }
    } else {
        res.status(401).json({
            error: "Unauthorized"
        });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


const express = require("express");
const app = express();
// rate limiting

let numberofRequests = 0;

function calculateRequests(req,res,next) {
    numberofRequests++;
    console.log(numberofRequests);
    next();
}

app.get("/health=checkup", calculateRequests, function(req,res){

});

app.get("/heath-checkup", calculateRequests, function(req, res){

});

app.listen(3000); */

const express = required("express");
const app = express();
app.use(express.json());

app.post("/health-checkup", function(req, res) {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.Length;

    res.send("you have" + kidneyLength + "kidneys");
});

app.listen(3000);