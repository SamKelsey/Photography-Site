express = require("express");
const app = express();
const bodyparser = require("body-parser");
const keys = require("./config/keys");
const path = require("path");

const nodemailer = require("nodemailer");

app.use(bodyparser.json());
app.use(express.static(__dirname));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: keys.USER,
    pass: keys.PASS,
  },
});

app.get("/", (req, res) => {
  res.sendFile("index.html", {
    root: path.join(__dirname, "./"),
  });
});

app.post("/send_email", (req, res) => {
  console.log(req.body);

  const mailOptions = {
    from: keys.USER,
    to: "sam_kelsey@hotmail.co.uk",
    subject: "thinkStudent Query",
    text:
      "Name: " +
      req.body.name +
      "\nEmail: " +
      req.body.email +
      "\nMessage: " +
      req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send(error);
    } else {
      res.send({
        message: info.response,
      });
    }
  });
});

PORT = 5000;
app.listen(PORT);
