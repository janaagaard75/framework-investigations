import { RouteComponentClass } from './RouteComponentClass'

export class TypedRoute<Params, LinkPath extends (...args: Array<any>) => string> {
  constructor(
    public component: RouteComponentClass<Params>,
    public routePath: string,
    public exact: boolean,
    public getLinkPath: LinkPath
  ) { }
}