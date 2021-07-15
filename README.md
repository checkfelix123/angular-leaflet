# AngularLeaflet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Leaflet

The following tutorial was used for building the
app: https://www.digitalocean.com/community/tutorials/angular-angular-and-leaflet

### setup

leaflet needs to be installed npm install leaflet@1.7.1

### Creating the Map Component

``
ng g c leaflet
``

after that add the component to the app-routing-module if needed

### Installation

Install the package and its peer dependencies via npm (or yarn):

````
npm install leaflet
npm install @asymmetrik/ngx-leaflet
````

If you intend to use this library in a typescript project (utilizing the typings), you'll need to install the leaflet
typings:
``
@types/leaflet@1.7.4
``

if you want markers to show up correctly on your maps, you need to configure Angular CLI to expose the Leaflet assets to
your application. To do this, make the following additional changes to angular.json under both the "build" and "test"
sections:

````
{
  ...
  "assets": [
    {
      "glob": "**/*",
      "input": "./node_modules/leaflet/dist/images",
      "output": "leaflet/"
    },
    "src/assets",
    "src/favicon.ico"
  ],
  ...
}
````

### add leaflet-draw

``
npm install leaflet-draw
``

``
npm install @asymmetrik/ngx-leaflet-draw
``

If you intend to use this library in a typescript project (utilizing the typings), you will need to also install the
leaflet typings via npm

````
npm install --save-dev @types/leaflet
npm install --save-dev @types/leaflet-draw
````

### Add leaflet.css to angular.json

````
"styles": [
  "./node_modules/leaflet/dist/leaflet.css",
  "src/styles.css"
],
````

