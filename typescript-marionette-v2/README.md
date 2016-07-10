# TypeScript Marionette Todo App

Todo app written in TypeScript and using Marionette. Created to learn about combining these two technologies and the latest build tools. Heavily inspired by TodoMVC, but diverging from that project, especially by using Bootstrap instead of the default markup and CSS.

## Set Up

    npm install

## Run

    Use `npm run` commands.

`npm run lint` does not yet work. Install tslint globally and run the command manually.

## Notes

* backbone-global definition types file is required by Marionette.
* The Marionette definition file was apparently updated to exported as "backbone.marionette" instead of just "marionette".