import { Component } from "react"
import { ComponentClass } from "react"
import { RouteComponentProps } from "react-router"

export class RouteComponent<Params, State> extends Component<RouteComponentProps<Params>, State> { }
export type RouteComponentClass<Params> = ComponentClass<RouteComponentProps<Params>>