import Router from "express";
const router = Router();

const api = require("./../controller/orders.controller");

router.route("/orders").post(api.postOrder);
router.put("/orders/:id").put(api.putOrder);
router.route("/orders/:page").get(api.getOrder);

export default router; 