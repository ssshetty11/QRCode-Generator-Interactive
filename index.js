import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qrImg.png"));
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("URL.txt saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(`Prompt couldn't be rendered in the current environment`);
    } else {
      console.log("please try again");
    }
  });
