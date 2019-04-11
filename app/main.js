"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var element_registry_1 = require("nativescript-angular/element-registry");
var app_module_1 = require("./app.module");
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. 
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers. 
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic, 
// that sets up a NativeScript application and can bootstrap the Angular framework.
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
