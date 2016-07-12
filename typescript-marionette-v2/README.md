# TypeScript Marionette Todo App

Todo app written in TypeScript and using Marionette. Created to learn about combining these two technologies and the latest build tools. Heavily inspired by TodoMVC, but diverging from that project, especially by using Bootstrap instead of the default markup and CSS.

## Set Up

    npm install

## Run

Use `npm run` commands.

`npm run lint` does not yet work. Install tslint globally and run the command manually.

## Notes

backbone-global definition types file is required by Marionette.

The Marionette definition file was apparently updated to exported as "backbone.marionette" instead of just "marionette".

The raison d'être for Backbone's Model classes is to be able to watch for changes, kinda like Knockout's observables. A collection is needed when the system needs to be able to detect changes made in a list of things. If the list of things doesn't change dynamically, there is no need to use a Backbone Collection - an array will do fine.

Backbone's event listeners relies on the models staying the same. So it's only possible to change the properties of a model - it's not possible to replace a model object with another.

The views don't automatically listen for changes. The changes to listen for has to be set up manually for each view.

### Updates required to type definition files

typings/global/backbone.localstorage/index.d.ts

At the bottom of the file add

    declare module "backbone.localstorage" {
        export = Backbone.LocalStorage;
    }

typings/global/marionette/index.d.ts

In interface CollectionViewOptions add this property

    childViewContainer?: any

Above CompositeView add this interface

    interface CompositeViewOptions<TModel extends Backbone.Model> extends CollectionViewOptions<TModel> {
        childView?: string,
        collection?: Backbone.Collection<TModel>,
        template?: any
    }

And in CompositeView change the constructor to

    constructor(options?: CompositeViewOptions<TModel>);
