const london={

    getLondonData:(req,res)=>{
        const nDate = new Date().toLocaleString('en-US', {
            timeZone: 'Europe/London'
          });
          
          console.log(nDate);
          console.log('Europe/London');
          res.send(nDate);
    
    },

}
module.exports = london;