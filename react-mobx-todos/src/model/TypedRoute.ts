import { RouteComponentClass } from "./RouteComponentClass"

// TODO: Is this still necessary now that the RouteComponent has become strongly typed?
export class TypedRoute<LinkPath extends (...args: Array<any>) => string> {
  constructor(
    public component: RouteComponentClass<void>,
    public routePath: string,
    public getLinkPath: LinkPath
  ) { }
}