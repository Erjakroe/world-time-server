const russia={

    getRussiaData:(req,res)=>{
        const nDate = new Date().toLocaleString('en-US', {
            timeZone: 'Europe/Moscow'
          });
          
          console.log(nDate);
          console.log('Europe/Moscow');
          res.send(nDate);
    
    },


}
module.exports = russia;