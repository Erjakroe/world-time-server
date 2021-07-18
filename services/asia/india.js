const india = {
  getKolkataData: (req, res) => {
    const nDate = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });
    console.log("asia/kolkata");

    //? spliting the data
    console.log(nDate.split(",")[0].trim());
    console.log(nDate.split(",")[1].trim());
    let currentDate = nDate.split(",")[0].trim();
    let currenttime = nDate.split(",")[1].trim();

    res.json({
      date: currentDate,
      time: currenttime,
    });
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
};
module.exports = india;
