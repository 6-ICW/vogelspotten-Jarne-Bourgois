const vogels = require("../data/index");

const getVogels = (req, res) => {
  res.json(
    vogels.map((items) => {
      items.id, items.soort;
    })
  );
};

const getOneVogel = (req, res) => {
  res.json(vogels.filter((item) => item.id == req.params.ID));
};

const meestGespot = (req, res) => {
  let maxGespot = 0;
  const data = vogels.aantalKeerGespot.forEach((item) => {
    if (item.aantalKeerGespot >= maxGespot) {
      maxGespot = item.aantalKeerGespot;
    }
  });
  const data2 = vogels.find((item) => {
    item.aantalKeerGespot == maxGespot;
  });
  res.json({ status: "gelukt", data2 });
};

const updateGespot = (req, res) => {};

module.exports = {
  getVogels,
  getOneVogel,
  meestGespot,
  updateGespot,
};
