const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/getData",(req,res)=>{
  res.send("Hello");
});

app.listen(3000, () => console.log('Example app is listening on port 3001.'));