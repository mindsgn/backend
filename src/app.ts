const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
var PORT: number = 3000;

import api from "./routes/post.route";

const app: any = express();
app.set("port", PORT);
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(api);

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, function() {
        //console.log(`listening on *:${PORT}`);
    });
}

export default app;