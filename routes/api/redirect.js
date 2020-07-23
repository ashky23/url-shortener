const router = require("express").Router();
const Url = require("../../models/url");
router.get("/:id", async (req, res) => {
  try {
    var url = await Url.findOne({ shortId: req.params.id });
    if (!url) {
      res.status(400).json({ message: "Url is not registered with our api" });
    }
    // console.log(url.longUrl);
    return res.redirect(url.longUrl);
  } catch (err) {
    res.status(500).json({ message: "Server is Sick :(" });
  }
});

module.exports = router;
