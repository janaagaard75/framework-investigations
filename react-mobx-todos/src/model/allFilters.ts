import { Todo } from './Todo'
import { TodosFilter } from './TodosFilter'

const showActive = new TodosFilter(
  'active',
  'Active',
  (todos: Array<Todo>) => todos.filter(todo => !todo.completed)
)

const showAll = new TodosFilter(
  '',
  'All',
  (todos: Array<Todo>) => todos
)

const showCompleted = new TodosFilter(
  'completed',
  'Completed',
  (todos: Array<Todo>) => todos.filter(todo => todo.completed)
)

export const allFilters = [
  showAll,
  showActive,
  showCompleted
]