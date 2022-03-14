const express = require("express");
const connect = require("./configs/db");
const userController = require("../src/controllers/user.controller");
const masterController = require("../src/controllers/masterAcc.controller");
const savingController = require("../src/controllers/savingAcc.controller");
const fixedController = require("../src/controllers/fixedAcc.controller");
const app = express();
app.use(express.json());
app.use("/user", userController);
app.use("/master", masterController);
app.use("/saving", savingController);
app.use("/fixedAcc", fixedController);

app.listen(5000, async () => {
  try {
    await connect();
  } catch (err) {
    console.log(err);
  }

  console.log("listening on port 5000");
});
