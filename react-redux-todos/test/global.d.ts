// Custom extensions for the global object.
// tslint:disable-next-line no-internal-module no-namespace
declare module NodeJS {
  interface Global {
    document: Document
    navigator: Navigator
    window: Window
  }
}