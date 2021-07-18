const india={

    getKolkataData:(req,res)=>{
        const nDate = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata'
          });
          
          console.log(nDate);
          console.log('asia/kolkata');
          res.send(nDate);
    
    },

    //! ########### indian time all over the zone is same thats why taking only one input that serves all #########
    // getDelhiData:(req,res)=>{
    //     const nDate = new Date().toLocaleString('en-US', {
    //         timeZone: 'Asia/Delhi'
    //       });
          
    //       console.log(nDate);
    //       console.log('asia/Delhi');
    //       res.send(nDate);
    
    // },
}
module.exports = india;