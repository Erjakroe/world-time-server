const france={

    getFranceData:(req,res)=>{
        const nDate = new Date().toLocaleString('en-US', {
            timeZone: 'Europe/Paris'
          });
          
          console.log(nDate);
          console.log('Europe/Paris');
          res.send(nDate);
    
    },

}
module.exports = france;