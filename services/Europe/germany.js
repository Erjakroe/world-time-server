const germany={

    getGermanyData:(req,res)=>{
        const nDate = new Date().toLocaleString('en-US', {
            timeZone: 'Europe/Berlin'
          });
          
          console.log(nDate);
          console.log('Europe/Berlin');
          res.send(nDate);
    
    },

}
module.exports = germany;