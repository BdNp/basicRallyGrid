basicGrid
=========================

## Overview


### License

AppTemplate is released under the MIT license.  See the file [LICENSE](./LICENSE) for the full text.

##Documentation for SDK

You can find the documentation on our help [site.](https://help.rallydev.com/apps/2.0/doc/)

# Rally Developer Quick Start Guide

This guide will give you a jumpstart on creating your own Rally apps. [Example project](https://github.com/BdNp/basicRallyGrid)

## Essential Material
* [Youtube video series on Rally Dev](https://www.youtube.com/watch?v=lig8er0EaCs&index=2&list=PL3PQ-IsMxhG14aDViKxlPZASIrHatNkft) - you can skip the 1st in the series, it’s very basic JS and some back story

* [Rally App SDK Documentation](https://help.rallydev.com/apps/2.0/doc/) -- There are tons of examples WITH code in the docs, under the last tab (lightbulb)

* [Web Service API Docs](https://rally1.rallydev.com/slm/doc/webservice/) 
  + [GET Defect call](https://rally1.rallydev.com/slm/webservice/v2.0/defect/ObjectID) 

###Getting Started
1. Install rally-app-builder via npm [rally-app-builder](https://github.com/RallyApps/rally-app-builder)
2. scaffold your app project in terminal: `rally-app-builder init <project-name>`
3. All of your work will be done in app.js within the object method 'launch'

#### Basic Tips
* Your controllers and views are executed from the `load` method in the Rally API Calls' listeners. `load` tells your app what to do with the data it's retrieved
* `load` does not fire on itself. Unless you plan to use it otherwise, you must set the `autoLoad` property on your app. `autoLoad: true` Otherwise nothing will happen.
* In order to create a view, you MUST specify the scope under the listener. `scope: this`


