const express = require("express");
const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");
require("dotenv").config();

const router = express.Router();

var AWS = require("aws-sdk");
const { reset } = require("nodemon");
AWS.config.loadFromPath("./s3_config.json");
var s3Bucket = new AWS.S3({ params: { Bucket: "ecommerce-tyler" } });

router.post("/", async (req, res) => {
  const imgdata = req.body.image;
  var buf = Buffer.from(
    imgdata.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );
  const Key = new Date().getTime().toString(36);
  var data = {
    Key,
    Body: buf,
    ContentEncoding: "base64",
    ContentType: "image/jpeg",
  };

  let location = "";
  let key = "";
  try {
    const { Location, Key } = await s3Bucket.upload(data).promise();
    location = Location;
    key = Key;
  } catch (error) {
    if (error) {
      console.log(error);
      console.log("Error uploading data: ", data);
    } else {
      console.log("successfully uploaded the image!");
    }
  }
  console.log(buf);
  res.send(location);
});

module.exports = router;
