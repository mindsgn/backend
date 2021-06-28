const Router = require("express");
const router = Router();

const api = require("./../controller/cards.controller");

router.get("/sim-cards", api.getCards);

export default router; 