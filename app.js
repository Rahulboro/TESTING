const express = require('express');
const app = express()
const PORT = 3000 


app.get("/", (req, res) => {
  res.send("<h1>Welcome to website<h1/>")
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})
