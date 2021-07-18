const russia = {
  getRussiaData: (req, res) => {
    const nDate = new Date().toLocaleString("en-US", {
      timeZone: "Europe/Moscow",
    });

    console.log(nDate);
    console.log("Europe/Moscow");
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
};
module.exports = russia;
