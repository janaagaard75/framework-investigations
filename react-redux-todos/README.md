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

Using Redux TypeScript Actions it's possible to pretty much remove the need for the strings identifying the actions. I think that is pretty awesome.

No default exports because that makes it possible to refactor names across files.

No index files to avoid files with the same names.

I like that everything has a specific place in the code, so thing are generally sorted alphabetically.

Type definitions use the more verbose `Array<foo>` syntax to distinguish from instatiating empty arrays and to keep the syntax consistent with objects like `Map` and `Set`.

Always define a variable containing the value being returned from a function, because that makes it easier to step debug the code.

# TODOs

* Make test runner watcher work.