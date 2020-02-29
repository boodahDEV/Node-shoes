const { Router } = require("express");
const router = Router();

const webpush = require('../webpush')

router.post("/subscripcion", async (req, res) => {
    pushSubscripton = req.body;
    console.log("~> ",pushSubscripton);
  
    // Server's Response
    res.status(201).json();
  });


module.exports = router;
