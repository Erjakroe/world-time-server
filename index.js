const express = require("express");
const app = express();
const port = process.env.PORT ||3000;

app.use('/',(req, res) => {
    var ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress||'').split(',')[0].trim();
    // var ip = req.headers;
    // console.log(req.headers);
    // console.log(req.headers['x-forwarded-for']);
    const nDate = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata'
      });
      
      console.log(nDate);
    res.send('Hello'+ip);

   
  });



// *server listen
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  