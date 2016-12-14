import { RouteComponent } from "./RouteComponent"

export class TypedRoute<LinkPath extends (...args: Array<any>) => string> {
  constructor(
    public component: RouteComponent,
    public routePath: string,
    public getLinkPath: LinkPath
  ) { }
}