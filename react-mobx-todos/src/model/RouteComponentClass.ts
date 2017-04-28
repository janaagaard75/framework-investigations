import { ComponentClass } from 'react'
import { RouteComponentProps } from 'react-router'

export type RouteComponentClass<Params> = ComponentClass<RouteComponentProps<Params>>