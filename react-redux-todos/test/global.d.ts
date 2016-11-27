// Custom extensions for the global object.
// TODO: Try naming this file global.d.ts and reference explicitly.
// tslint:disable-next-line no-internal-module no-namespace
declare module NodeJS {
  interface Global {
    document: Document
    navigator: Navigator
    window: Window
  }
}