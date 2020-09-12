const functions = require('firebase-functions');

const express = require("express")
const cors = require("cors")

const stripe = require("stripe")("sk_test_51HQDUGBsrjx0tjIDtFGmkdiBYHF47rMsEyDQ1WdnozIQywpaNYxiUtl4yu7hyIjWcHb7A5EycGExE2Y2D8phoZ51006QXDXAFb");

//API

//App Config
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());
//Api route
app.get("/", (request, response) => response.status(200).send("hello"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log("Payment received for the amount >>>", total)


    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: "inr",
    });

    //ok- create 201 
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


//Listen cmd
exports.api = functions.https.onRequest(app);