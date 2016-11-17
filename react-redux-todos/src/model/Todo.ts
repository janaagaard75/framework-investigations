import { Record } from 'immutable'

// TODO: Consider using https://github.com/rangle/typed-immutable-record.
interface TodoProperties {
  completed: boolean
  id: number
  text: string
}

// TODO: Is it possible to avoid having default values?
const todoRecord = Record({
  completed: false,
  id: 0,
  text: ''
})

export class Todo extends todoRecord implements TodoProperties {
  constructor(todo: TodoProperties) {
    super(todo)
  }

  completed: boolean
  id: number
  text: string
}