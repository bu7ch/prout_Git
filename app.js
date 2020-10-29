const app = require("express")();

app.get("/", (req, res) => {
  res.send("couucou");
});

app.listen(3000, () => console.log("application is running here!"));
