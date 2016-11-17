# TypeScript & Backbone.js TodoMVC Example

> TypeScript is a language for application-scale JavaScript development. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open Source.

> _[TypeScript - typescriptlang.org](http://typescriptlang.org)_


## Learning TypeScript

The [TypeScript website](http://typescriptlang.org) is a great resource for getting started.

Here are some links you may find helpful:

* [Tutorial](http://www.typescriptlang.org/Tutorial)
* [Code Playground](http://www.typescriptlang.org/Playground)
* [Documentation](https://github.com/Microsoft/TypeScript/wiki)
* [Applications built with TypeScript](http://www.typescriptlang.org/Samples)
* [Blog](http://blogs.msdn.com/b/typescript)
* [Source Code](https://github.com/Microsoft/TypeScript)

Articles and guides from the community:

* [Thoughts on TypeScript](http://www.nczonline.net/blog/2012/10/04/thoughts-on-typescript)
* [ScreenCast - Why I Like TypeScript](http://www.leebrimelow.com/why-i-like-typescripts)

Get help from other TypeScript users:

* [TypeScript on StackOverflow](http://stackoverflow.com/questions/tagged/typescript)
* [Forums](https://github.com/Microsoft/TypeScript/issues)
* [TypeScript on Twitter](http://twitter.com/typescriptlang)

_If you have other helpful links to share, or find any of the links above no longer work, please [let us know](https://github.com/tastejs/todomvc/issues)._


## Implementation

This application uses TypeScript classes to create Backbone.js models and views, and jQuery for all DOM manipulation.


## Setup

Install global packages TypeScript complier, TypeScript definition files manager and TypeScript linter.

    npm install --global tsc typings tslint

Install NPM packages and definition files.

    npm install
    typings install

## Development

* tsconfig.json: https://www.typescriptlang.org/docs/handbook/tsconfig.json.html
** http://www.typescriptlang.org/docs/handbook/compiler-options.html
* tslint.json: http://palantir.github.io/tslint/rules/ and https://www.npmjs.com/package/tslint-eslint-rules

    tslint src/*

## Running

To compile the TypeScript in this project run the `tsc` command. The compile will read the necessary settings from tsconfig.json.

```
# from examples/typescript-backbone
$ tsc
$ open index.html
```
