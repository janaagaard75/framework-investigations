# TypeScript Marionette Todo App

Todo app written in TypeScript and using Marionette. Created to learn about Backbone and Marionette and how it could be possible to use TypeScript with that framework. This is not meant as a reference implementation for building Marionette applications. Heavily inspired by TodoMVC.

## Set Up

    npm install

## Run

Use `npm run` commands.

`npm run lint` only works if tslint is installed globally.

## Notes

Marionette's view hierarchy. LayoutView and CompositeItemView and CollectionView can always be replaced by the more advanced LayoutView and CompositeView, so there doesn't seem any reason to use the two former, except, perhaps, for some  performance considerations.

             View
            /    \
     ItemView    CollectionView
         |             |
    LayoutView   CompositeView

The backbone-global definition types file is required by Marionette. Don't know why it isn't installed automatically as a dependency. The new npm types@ might solve this issue.

The raison d'être for Backbone's Model classes is to be able to watch for changes, pretty much like Knockout's observables. The Collection class makes it possible to watch a list of elements. If the list of things doesn't change dynamically, it might be possible to just use an array, but a collection is probably needed if a CollectionView is desired.

Backbone's event listeners relies on the models staying the same. So it's only possible to change the properties of a model. If a model is replaced with another obejct, listeners will have to be setup again. So change the properties of a model instead of replacing it with a new object.

The views don't automatically listen for changes. It's pretty simple to listen for changes using Backbone's listenTo.

The views generally only accept a single model, so it can easily becomes necessary to create view models specific to each a view. FilterView.ts and ToogleAllView.ts shows that this is quite verbose

It's not possible to define a signature for setDefaultOptions because the method is static, and this makes it impossible to access the types defined on the class.

Upgrading to TypeScript 2 results in errors in the type definition files.

Marionette does not have components. A "component" is composed of mutiple views and behaviors. It's probably possible to combine the abstractions to creator other components.

It feels wrong to define the top level tag using the tagName property. This should not be necessary. Setting attributes with dynamic values becomes difficult because the methods used to determine the values have to be static. FilterView adds a redundant span element to the DOM. tagName et al can be defined as functions, but the definition type file does not support that.

There really is a lot of boilerplate code needed. The lag of computed values means that it's not simply possible to watch for changes to TodoCollection.allCompleted(), but instead clicks on each checkbox is watched and a manual update-if-necessary is implemented.

## Updates required to type definition files

Should probably create pull requests for these.

### In `typings/global/backbone.localstorage/index.d.ts`

Declare a module a the bottom of the file.

    declare module "backbone.localstorage" {
        export = Backbone.LocalStorage;
    }

### In `typings/global/marionette/index.d.ts`

Add this property in `CollectionViewOptions`.

    childViewContainer?: any;

Add this interface above `CompositeView`.

    interface CompositeViewOptions<TModel extends Backbone.Model> extends CollectionViewOptions<TModel> {
        childView?: string,
        collection?: Backbone.Collection<TModel>,
        template?: any
    }

Change the contructor in `CompositeView`.

    constructor(options?: CompositeViewOptions<TModel>);

## To do

- Add Bootstrap as an npm modules and include it in the build phase.
- The TODOs in the code.
