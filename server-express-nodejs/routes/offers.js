const express = require("express");
const router = express.Router();

const Providers = require("../mocks/providers");
// /* GET offers sync */
router.get("/", async (req, res, next) => {
  console.log("GET /offers");
  const offers = await Promise.all([
    Providers.akbank.getOffers(),
    Providers.garanti.getOffers(),
    Providers.yapikredi.getOffers(),
    Providers.isbank.getOffers(),
    Providers.finansbank.getOffers(),
    Providers.denizbank.getOffers(),
    Providers.teb.getOffers(),
  ]);

  const sortedOffers = offers.sort((a, b) => {
    return a.totalPayment - b.totalPayment;
  });

  res.send(sortedOffers);
});

// /* GET offers async */
router.get("/stream", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  let offers = [];

  Providers.akbank.getOffers().then((offer) => {
    offers.push(offer);
  });
  Providers.garanti.getOffers().then((offer) => {
    offers.push(offer);
  });

  Providers.yapikredi.getOffers().then((offer) => {
    offers.push(offer);
  });

  Providers.isbank.getOffers().then((offer) => {
    offers.push(offer);
  });

  Providers.finansbank.getOffers().then((offer) => {
    offers.push(offer);
  });

  Providers.denizbank.getOffers().then((offer) => {
    offers.push(offer);
  });

  Providers.teb.getOffers().then((offer) => {
    offers.push(offer);
  });

  const sendMessageInt = setInterval(() => {
    const data = JSON.stringify(offers);
    res.write(`data: ${data} \n\n`);

    if (offers.length === 7) {
      clearInterval(sendMessageInt);
      res.end();
    }
  }, 500);

  req.on("close", () => {
    console.log("Connection closed");
    clearInterval(sendMessageInt);
  });

  req.on("end", () => {
    console.log("Connection ended");
    clearInterval(sendMessageInt);
  });
});

module.exports = router;
