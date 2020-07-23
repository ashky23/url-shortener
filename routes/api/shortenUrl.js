const express = require("express");
const router = express.Router();
const Url = require("../../models/url");
const shortid = require("shortid");
const validurl = require("valid-url");

router.post("/", async (req, res) => {
  const longUrl = req.body.longUrl;
  // console.log(req.body);
  if (validurl.isUri(longUrl)) {
    try {
      var url = await Url.findOne({ longUrl });

      if (url) {
        res.json(url);
      } else {
        const shortId = shortid.generate();
        const shortUrl = process.env.BASE_URL + shortId;
        const data = {
          longUrl,
          shortUrl,
          shortId,
          createdAt: Date.now(),
        };
        url = await Url.create(data);
        res.json(url);
      }
    } catch (err) {
      //   console.log(err);
      res.status(500).json({ message: "Server is Sick :(" });
    }
  } else {
    res.status(400).json({ message: "the provided url is invalid!" });
  }
});

module.exports = router;
