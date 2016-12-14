import { ComponentClass } from "react"
import { RouterContext } from "react-router"

interface RouteComponentProps extends RouterContext.RouterContextProps { }

export type RouteComponent = ComponentClass<RouteComponentProps>