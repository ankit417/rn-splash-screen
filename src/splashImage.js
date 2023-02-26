const Jimp = require("jimp");

const CURR_DIR = process.cwd();
exports.generateSplash = (imgName) => {
  const resourcePath = `${CURR_DIR}/android/app/src/main`;
  //mipmap-hdpi
  Jimp.read(imgName, (err, lenna) => {
    if (err) throw err;
    lenna.resize(480, 800).write(`${resourcePath}/res/mipmap-hdpi/splash.png`);
  });

  //mipmap-mdpi
  Jimp.read(imgName, (err, lenna) => {
    if (err) throw err;
    lenna.resize(320, 480).write(`${resourcePath}/res/mipmap-mdpi/splash.png`);
  });

  //mipmap-xhdpi
  Jimp.read(imgName, (err, lenna) => {
    if (err) throw err;
    lenna
      .resize(720, 1280)
      .write(`${resourcePath}/res/mipmap-xhdpi/splash.png`);
  });

  //mipmap-xxhdpi
  Jimp.read(imgName, (err, lenna) => {
    if (err) throw err;
    lenna
      .resize(960, 1600)
      .write(`${resourcePath}/res/mipmap-xxhdpi/splash.png`);
  });

  //mipmap-xxxhdpi
  Jimp.read(imgName, (err, lenna) => {
    if (err) throw err;
    lenna
      .resize(1280, 1920)
      .write(`${resourcePath}/res/mipmap-xxxhdpi/splash.png`);
  });
};
