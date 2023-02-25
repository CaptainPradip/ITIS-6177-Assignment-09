const express = require("express");
const app = express();
const port = 3003;
const axios = require('axios').default;
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/say",async(req,res)=>{
  const url = " https://e79uf7sfjb.execute-api.ap-south-1.amazonaws.com/dev?keyword="+req.query.keyword;
  axios.get(url)
  .then((response)=>{
       res.json(response.data);
  }).catch((error)=>{
       console.log(error);
       res.send(error);
  })
});

app.get("*", async (req, res) => {
  res.status(404).json({
    message: "resource not found, please use other available resources",
  });
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});