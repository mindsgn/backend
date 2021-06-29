import Router from "express";
const router = Router();

const api = require("./../controller/orders.controller");

router.route("/orders")
.post(api.postOrder)
.get(api.getOrder);

router.route("/orders/:id")
.put(api.putOrder);

export default router; 