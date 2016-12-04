import { expect } from 'chai'

import { createAddTodo } from '../../src/actions/actionCreators'
import { createToggleTodo } from '../../src/actions/actionCreators'
import { Todo } from '../../src/model/Todo'
import { Todos } from '../../src/model/Todos'
import { todosReducer } from '../../src/reducers/todosReducer'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    const initialState: Todos = []

    expect(
      todosReducer(undefined, {} as any)
    ).to.deep.equal(initialState)
  })

  it('should handle ADD_TODO', () => {
    const stateBefore: Todos = []
    const addTodoAction = createAddTodo('Run the tests')
    const actualStateAfter: Todos = todosReducer(stateBefore, addTodoAction)
    const expectedStateAfter: Todos = [
      new Todo({
        completed: false,
        id: 1,
        text: 'Run the tests'
      })
    ]
    expect(actualStateAfter).to.deep.equal(expectedStateAfter)

    expect(
      todosReducer([
        new Todo({
          completed: false,
          id: 1,
          text: 'Use Redux'
        })
      ],
        createAddTodo('Run the tests')
      )
    ).to.deep.equal([
      new Todo({
        completed: false,
        id: 1,
        text: 'Use Redux'
      }),
      new Todo({
        completed: false,
        id: 2,
        text: 'Run the tests'
      })
    ])

    expect(
      todosReducer([
        new Todo({
          completed: false,
          id: 1,
          text: 'Use Redux'
        }),
        new Todo({
          completed: false,
          id: 3,
          text: 'Run the tests'
        })
      ],
        createAddTodo('Fix the tests')
      )
    ).to.deep.equal([
      new Todo({
        completed: false,
        id: 1,
        text: 'Use Redux'
      }),
      new Todo({
        completed: false,
        id: 3,
        text: 'Run the tests'
      }),
      new Todo({
        completed: false,
        id: 4,
        text: 'Fix the tests'
      })
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    const initialState: Todos = [
      new Todo({
        completed: true,
        id: 1,
        text: 'Use Redux'
      }),
      new Todo({
        completed: false,
        id: 2,
        text: 'Run the tests'
      })
    ]

    const expectedIntermediateState: Todos = [
      new Todo({
        completed: false,
        id: 1,
        text: 'Use Redux'
      }),
      new Todo({
        completed: false,
        id: 2,
        text: 'Run the tests'
      })
    ]

    const expectedFinalState: Todos = [
      new Todo({
        completed: false,
        id: 1,
        text: 'Use Redux'
      }),
      new Todo({
        completed: true,
        id: 2,
        text: 'Run the tests'
      })
    ]

    const actualIntermediateState: Todos = todosReducer(initialState, createToggleTodo(1))
    expect(actualIntermediateState).to.deep.equal(expectedIntermediateState)

    const actualFinalState: Todos = todosReducer(actualIntermediateState, createToggleTodo(2))
    expect(actualFinalState).to.deep.equal(expectedFinalState)
  })
})