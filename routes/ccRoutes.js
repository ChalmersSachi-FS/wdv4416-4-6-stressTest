import express from "express";
import mongoose from "mongoose";
import CreditCard from "../models/creditCard.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { ccNumber, expiration, ccv } = req.body;
  const creditCard = new CreditCard({ ccNumber, expiration, ccv });
  console.log("Saving CreditCard");
  creditCard
    .save()
    .then((result) => {
      res.status(201).json({
        message: "CreditCard Saved",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error saving CreditCard", error: err });
    });
});

export default router;
