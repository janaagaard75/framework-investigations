import { ComponentClass } from "react"

type NakedComponent = ComponentClass<void>

export class TypedRoute<LinkPath extends (...args: Array<any>) => string> {
  constructor(
    public component: NakedComponent,
    public routePath: string,
    public getLinkPath: LinkPath
  ) { }
}