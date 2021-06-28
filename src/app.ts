import express from "express";
import cors from "cors";
import helmet from "helmet";

//routes
import cards from "./routes/cards.route";
import orders from "./routes/orders.route";

const PORT: number = 3200;

const app: any = express();
app.set("port", PORT);
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cards);
app.use(orders);

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT);
}

export default app;