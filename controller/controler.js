const vogels = require("../data/index");

const getVogels = (req, res) => {
  // res.json(vogels.forEach(vogels.map((item)=>{
  //     id: item.id,
  //     soort: item.soort
  // }
};

const getOneVogel = (req, res) => {
  res.json(vogels.filter((item) => item.id == req.params.ID));
};

module.exports = {
  getVogels,
  getOneVogel,
};
