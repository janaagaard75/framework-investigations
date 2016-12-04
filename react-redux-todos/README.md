# Implementation choices

This is an implementation of [TodoMVC](http://todomvc.com/) built using:

* [React](http://facebook.github.io/react/)
* [Redux](https://github.com/rackt/redux)
* [TypeScript](http://www.typescriptlang.org/)
* [Webpack 2](http://webpack.js.org/), currently in beta

Other packages:

* [Redux TypeScript Actions](https://github.com/aikoven/redux-typescript-actions)
* [TypeScript 2's built-in support for type definition files](https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/).
* [Yarn](https://yarnpkg.com/).

It is based on Redux' todos example.

# Notes about the implementation

Focus on writing self documenting code - probably more than what is generally seen in the React/Redux community. Expect longer variable and function names than what is usually seen. Example: The action creator methods are all prefix with `create` to emphasise that these are methods used to create the specific actions.

Actions only contain information about what to do, and don't contain any computing. All computing is done in the reducer. I believe this is the way Redux is meant to be used. Using Redux TypeScript Actions it's possible to pretty much remove the need for the strings identifying the actions. I think that is pretty awesome.

No default exports because that makes it possible to refactor names across files.

No index files to avoid files with the same names.

I like that everything has a specific place in the code, so thing are generally sorted alphabetically.

Type definitions use the more verbose `Array<foo>` syntax to distinguish from instatiating empty arrays and to keep the syntax consistent with objects like `Map` and `Set`.

Always define a variable containing the value being returned from a function, because that makes it easier to step debug the code.

Using TypeScript's readonly for the Redux store, so no need for Immutable or similar library. Not yet sure if this is as efficient as using Immutable, but it sure is a lot simpler.

Redux is difficult. Actions are really action creators. Convention of naming the reducers as the same as the property they are reducing to facilitate using an ES6 shorthand. The store's root state is called state, just as the local state of React components.

2 spaces for indents, Stroustrup style for braces, no semicolons. Still considering using double quotes for strings. Prefer fat arrows for functions.

# TODOs

* Make test runner watcher work.
* Choose between 'Props' and 'PropTypes'.