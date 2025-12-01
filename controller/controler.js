const vogels = require("../data/index");

const getVogels = (req, res) => {
  const data = vogels.map((items) => {
    items.id, items.soort;
  });
  res.json({ status: "gelukt", data });
};

const getOneVogel = (req, res) => {
  res.json(vogels.filter((item) => item.id == req.params.ID));
};

const meestGespot = (req, res) => {
  let maxGespot = 0;
  const data = vogels.aantalKeerGespot.forEach((item) => {
    if (item >= maxGespot) {
      maxGespot = item.aantalKeerGespot;
    }
  });
  console.log(data);
  console.log(maxGespot);
  const data2 = vogels.find((item) => {
    item.aantalKeerGespot == maxGespot;
  });
  console.log(data2);
  res.json({ status: "gelukt", data2 });
};

const updateGespot = (req, res) => {};

module.exports = {
  getVogels,
  getOneVogel,
  meestGespot,
  updateGespot,
};
