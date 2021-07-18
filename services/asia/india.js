const india={

    getKolkataData:(req,res)=>{
        const nDate = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata'
          });
          
          console.log(nDate);
          console.log('asia/kolkata');
          res.send(nDate);
    
    }
}
module.exports = india;