# TypeScript Marionette Todo App

Todo app written in TypeScript and using Marionette. Created to learn about Backbone and Marionette and how it could be possible to use TypeScript with that framework. This is not meant as a reference implementation for building Marionette applications. Heavily inspired by TodoMVC.

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

The views generally only accept a single model, so it can easily become necessary to create view models specific to each a view. This might be a consequence of the string typings that TypeScript introduce. FilterView.ts shows that this is quite verbose.

### Updates required to type definition files

#### `typings/global/backbone.localstorage/index.d.ts`

Add to the bottom of the file

    declare module "backbone.localstorage" {
        export = Backbone.LocalStorage;
    }

#### `typings/global/marionette/index.d.ts`

Add this property in `CollectionViewOptions`,

    childViewContainer?: any

Add this interface above `CompositeView`

    interface CompositeViewOptions<TModel extends Backbone.Model> extends CollectionViewOptions<TModel> {
        childView?: string,
        collection?: Backbone.Collection<TModel>,
        template?: any
    }

Change the contructor in `CompositeView` to

    constructor(options?: CompositeViewOptions<TModel>);
