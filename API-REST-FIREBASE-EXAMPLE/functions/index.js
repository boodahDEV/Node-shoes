const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const { firestore } = require("firebase-admin");

const app = express();
admin.initializeApp({
  credential: admin.credential.cert(".firebase.json"),
  databaseURL: "https://tester-proyect.firebaseio.com",
});
const db = admin.firestore();

app.get("/hello-world", (req, res) => {
  return res.status(200).json({ messaje: "hello world" });
});

app.post("/api/products", async (req, res) => {
  try {
    await db
      .collection("products")
      .doc("/" + req.body.id + "/")
      .set({
        name: req.body.name,
      });
    return res.status(204).json();
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.get("/api/products/:product_id", (req, res) => {
  (async () => {
    try {
      const doc = db.collection("products").doc(req.params.product_id);
      const items = await doc.get();
      const response = items.data();
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).send(error);
    }
  })();
});

app.get("/api/products", async (req, res) => {
  try {
    const query = db.collection("products");
    const querySnapshot = await query.get();

    const response = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
    }));

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.delete("/api/products/:product_id", async (req, res) => {
  try {
    const document = db.collection("products").doc(req.params.product_id);
    await document.delete();
    return res.status(204).json();
  } catch (error) {
    return res.status(500).send(error);
  }
});

app.put("/api/products/:product_id", async (req, res) => {
  try {
    const document = db.collection("products").doc(req.params.product_id);
    await document.update({
      name: req.body.name,
    });
    return res.status(204).json();
  } catch (error) {
    return res.status(500).send(error);
  }
});

exports.app = functions.https.onRequest(app);
