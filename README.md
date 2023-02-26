# Introduction

This tool simplifies the process of generating a splash screen for your Android app. It scaffolds the generation process by taking a single image file and placing it in the appropriate "mip map" folder. Additionally, it generates splash screen XML drawable, as well as color and style resources for your app.

## Installation

```bash
  npm i -g rn-splash-screen-gen
```

## Usage

### Generate Splash image

```javascript
rn-splash-screen-gen generate:image path_to_image.jpg
```

This command generates splash image from single image and places different size images in respective res/mipmap folder

### Generate Splash screen

```javascript
rn-splash-screen-gen generate:splash
```

This command creates res/drawable folder if doesn't exists.  
creates res/drawable/background_splash.xml file.  
creates res/values/colors.xml.  
creates res/values/styles.xml.

### Finally

Add

```javascript
android: theme = "@style/SplashTheme";
android: exported = "true";
```

in AndroidManifest.xml in Activity Tag.

#### example:

```javascript
 <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
        android:launchMode="singleTask"
        android:windowSoftInputMode="adjustResize"
        android:theme="@style/SplashTheme"
        android:exported="true">
```

## Help

```bash
  rn-splash-screen-gen help
```
