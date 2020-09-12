const functions = require('firebase-functions');

const express = require("express")
const cors = require("cors")

const stripe = require("stripe")("sk_test_51HQDUGBsrjx0tjIDtFGmkdiBYHF47rMsEyDQ1WdnozIQywpaNYxiUtl4yu7hyIjWcHb7A5EycGExE2Y2D8phoZ51006QXDXAFb");
