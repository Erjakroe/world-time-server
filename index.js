const express = require("express");
const { ppid } = require("process");
const app = express();
const port = process.env.PORT ||3000;

const asiaRoutes = require("./routes/asia");

app.use('/',(req, res) => {
    var ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress||'').split(',')[0].trim();
    // var ip = req.headers;
    // console.log(req.headers);
    // console.log(req.headers['x-forwarded-for']);
    // const nDate = new Date().toLocaleString('en-US', {
    //     timeZone: 'Asia/Kolkata'
    //   });
      
      console.log(ip);
    // res.send('Hello'+ip);

   
  });

  app.use('/asia',asiaRoutes)



// *server listen
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  