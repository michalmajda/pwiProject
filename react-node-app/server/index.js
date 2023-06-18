// server/index.js

const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.get("/api/data", (req, res) => {
    const data = [
        { id: 1, plTitle: 'Szafy', enTitle: 'Closets', plDesciption: 'Szafy z drzwiami przesuwnymi, które zabudują Twoją przestrzeń', enDescription: 'Sliding door cabinets to disrupt your space' },
        { id: 2, plTitle: 'Stoły', enTitle: 'Tables', plDesciption: 'Stoły dębowe na wymiar do Twojej jadalni', enDescription: 'Customized oak tables for your dining room' },
        { id: 3, plTitle: 'Biurka', enTitle: 'Desks', plDesciption: 'Solidne biurka do Twojego gabinetu', enDescription: 'Sturdy desks for your office' },
        { id: 4, plTitle: 'Meble ogrodowe', enTitle: 'Garden furniture', plDesciption: 'Twój ogród na Twoich zasadach', enDescription: 'Your garden on your terms' }
      ];
    res.json(data);
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "supermeble8@gmail.com",
      pass: "phgsszytyvjoypvs",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "supermeble8@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });