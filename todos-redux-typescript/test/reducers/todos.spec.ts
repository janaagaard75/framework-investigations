import { List } from 'immutable'
import { expect } from 'chai'
import { addTodo } from '../../src/actions/addTodo'
import { Todo } from '../../src/model/Todo'
import { Todos } from '../../src/model/Todos'
import { todosReducer } from '../../src/reducers/todos'
import { toggleTodo } from '../../src/actions/toggleTodo'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    const initialState: Todos = List<Todo>()

    expect(
      todosReducer(undefined, {} as any)
    ).to.equal(initialState)
  })

  it('should handle ADD_TODO', () => {
    const stateBefore: Todos = List<Todo>()
    const addTodoAction = addTodo('Run the tests')
    const actualStateAfter: Todos = todosReducer(stateBefore, addTodoAction)
    const expectedStateAfter: Todos = List<Todo>([
      new Todo({
        completed: false,
        id: 0,
        text: 'Run the tests'
      })
    ])
    expect(actualStateAfter).to.equal(expectedStateAfter)

    expect(
      todosReducer(List<Todo>([
        new Todo({
          completed: false,
          id: 0,
          text: 'Use Redux'
        })
      ]),
        addTodo('Run the tests')
      )
    ).to.equal(List<Todo>([
      new Todo({
        completed: false,
        id: 0,
        text: 'Use Redux'
      }),
      new Todo({
        completed: false,
        id: 1,
        text: 'Run the tests'
      })
    ]))

    expect(
      todosReducer(List<Todo>([
        new Todo({
          completed: false,
          id: 0,
          text: 'Use Redux'
        }),
        new Todo({
          completed: false,
          id: 1,
          text: 'Run the tests'
        })
      ]),
        addTodo('Fix the tests')
      )
    ).to.equal(List<Todo>([
      new Todo({
        completed: false,
        id: 0,
        text: 'Use Redux'
      }),
      new Todo({
        completed: false,
        id: 1,
        text: 'Run the tests'
      }),
      new Todo({
        completed: false,
        id: 2,
        text: 'Fix the tests'
      })
    ]))
  })

  it('should handle TOGGLE_TODO', () => {
    const initialState: Todos = List<Todo>([
      new Todo({
        completed: true,
        id: 0,
        text: 'Use Redux'
      }),
      new Todo({
        completed: false,
        id: 1,
        text: 'Run the tests'
      })
    ])

    const expectedIntermediateState: Todos = List<Todo>([
      new Todo({
        completed: false,
        id: 0,
        text: 'Use Redux'
      }),
      new Todo({
        completed: false,
        id: 1,
        text: 'Run the tests'
      })
    ])

    const expectedFinalState: Todos = List<Todo>([
      new Todo({
        completed: false,
        id: 0,
        text: 'Use Redux'
      }),
      new Todo({
        completed: true,
        id: 1,
        text: 'Run the tests'
      })
    ])

    const actualIntermediateState: Todos = todosReducer(initialState, toggleTodo(0))
    expect(actualIntermediateState).to.equal(expectedIntermediateState)

    const actualFinalState: Todos = todosReducer(actualIntermediateState, toggleTodo(1))
    expect(actualFinalState).to.equal(expectedFinalState)
  })
})