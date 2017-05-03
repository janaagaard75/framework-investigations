export class TypedLink<LinkPath extends (...args: Array<any>) => string> {
  constructor(
    public getLinkPath: LinkPath
  ) { }
}