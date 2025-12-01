const express = require("express");
const ctrlspotten = require("../controller/controler");
// maak router object aan
const routes = express.Router();

// maak de verschillende routs aan

routes.get("/", ctrlspotten.getVogels);
routes.get("/:ID", ctrlspotten.getOneVogel);
routes.get("/gespot", ctrlspotten.meestGespot);
routes.post("/", ctrlspotten.updateGespot);
// routes.put("/", ctrlspotten.AddVogel); // {soort}
// routes.patch("/", ctrlspotten.vogelGespot); // {ID}

// exporteer het router object
module.exports = routes;
