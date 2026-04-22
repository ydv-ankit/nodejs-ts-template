import express from "express";

const app = express();

const PORT = Number(process.env.PORT || 8080);

app.get("/", (_, res) => {
  res.send("hello ankit");
});

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});
