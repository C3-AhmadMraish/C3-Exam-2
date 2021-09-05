const express = require("express");
const cors = require("cors");

require("./db")
require("dotenv").config()

const app = express();

app.use(express.json())
app.use(cors());


//routers

const bookRouter = require("./routers/routes/books")

//----------
app.use("/books",bookRouter)
//------------------------------------------
const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
