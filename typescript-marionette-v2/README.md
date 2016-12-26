# TypeScript Marionette Todo App

Todo app written in TypeScript and using Marionette. Created to learn about Backbone and Marionette and how it could be possible to use TypeScript with that framework. This is not meant as a reference implementation for building Marionette applications. Heavily inspired by TodoMVC.

## Set Up

    npm install
    typings install

Make the manual changes to the type definition files listed below.

## Run

    npm run serve

`npm run lint` only works if tslint is installed globally.

## Notes

This is Marionette's view hierarchy. LayoutView and CompositeItemView and CollectionView can always be replaced by the more advanced LayoutView and CompositeView, so there doesn't seem any reason to use the two former, except, perhaps, for some  performance considerations.

             View
            /    \
     ItemView    CollectionView
         |             |
    LayoutView   CompositeView

The backbone-global definition types file is required by Marionette. Don't know why it isn't installed automatically as a dependency. The new npm types@ might solve this issue.

The raison d'être for Backbone's model classes is to be able to watch for changes, pretty much like Knockout's observables. The Collection class makes it possible to watch a list of models.

Bootstrap's tabs require a strict hierarchy of ul > li > a elements in the html markup. Implementing that using a nice view hierarchy requires using a proper Backbone Collection, which seems overkill when the tabs are static. Don't know how much overhead this adds to the solution, but it feels verbose.

Backbone's event listeners relies on the references to the models staying the same. So it's only possible to change the properties of a model. If a model is replaced with another obejct, listeners will have to be setup again. So change the properties of a model instead of replacing it with a new object.

The views don't automatically listen for change. It's simple to listen for changes using Backbone's listenTo, but doing the manual hookups feels very old school when having used Angular.

The views generally only accept a single model, so it can easily becomes necessary to create view models specific to each a view. FilterView.ts and TodosViewModels.ts shows that this is a bit verbose.

It's not possible to define a signature for setDefaultOptions because the method is static, and this makes it impossible to access the types defined on the class.

Upgrading to TypeScript 2 results in errors in the type definition files.

The fact that Marionette does not have components makes it harder to divide the code up natually than with Angular or React.

It feels wrong to define the top level tag using the tagName property. This should not be necessary. Setting attributes with dynamic values becomes difficult because the methods used to determine the values have to be static. FilterView adds a redundant span element to the DOM. tagName et al can be defined as functions, but the definition type file does not support that.

There really is a lot of boilerplate code needed. Example: Listening for clicks on each checkbox and manually doing an update-if-necessary. If the framework had proper computed values it would have been possible to simply listen for for changes to TodoCollection.allAreCompleted().

Type safety is only partial because a lot of the properties in Backbone/Marionette are optional. Example: An ItemView may have a collection, so the property is there. Solving this would require creating different ItemView classes in the type definition file.

Missed features:

* Computed values and filtered collections with events.
* Components.
* Better documentation.
* Controllers.
* Built-in event watchers.

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

- Add Bootstrap as an npm module and include it in the build phase.
- The compiler does not required neither Backbone nor Marionette to be imported, but the transpiled code does not work if Marionette is missing.
- Toggling todos affects all todos, including currently hidden ones. This is how the standard TodoMVC app works, bit feels a weird.
