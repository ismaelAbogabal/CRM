import express from "express";
import Home from "./views/home";

import path from "path";
import ReactDOm from "react-dom/server";

// console.log(ReactDOm.renderToString(Home()));

const app = express();

app.use("/assets", express.static(path.resolve(__dirname, "assets")));

app.get("/", (req, res) => {
  res.end(ReactDOm.renderToString(Home()));
});

const PORT = +(process.env.PORT ?? "0") || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
