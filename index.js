#!/usr/bin/env node
const splashImage = require("./src/splashImage");
const splashScreen = require("./src/splashScreen");
var argument = process.argv;

switch (argument[2]) {
  case "generate:image":
    splashImage.generateSplash(argument[3]);
    break;
  case "generate:splash":
    splashScreen.splashScreen();
    break;
  case "help":
    console.log(`
    rn-splash-screen generate:image splashImage.png : To generate splash image

    rn-splash-screen generate:splash : To generate Splash screen

    After Running two command place the following code in AndroidManifest file
    in activity tag inside application tag.

    android:theme="@style/SplashTheme"
    android:exported="true"
    `);
  default:
    return;
}
