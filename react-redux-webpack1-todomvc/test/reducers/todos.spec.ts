import { actionCreators } from '../../src/actions'
import todosReducer from '../../src/reducers/todosReducer'
const expect = require('expect')

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todosReducer(undefined, {} as any)
    ).toEqual([
      {
        completed: false,
        id: 0,
        text: 'Use Redux'
      }
    ])
  })

  it('should handle ADD_TODO', () => {
    const stateBefore = []
    const addTodoAction = actionCreators.addTodo('Run the tests')
    const actualStateAfter = todosReducer(stateBefore, addTodoAction)
    const expectedStateAfter = [
      {
        completed: false,
        id: 0,
        text: 'Run the tests'
      }
    ]
    expect(actualStateAfter).toEqual(expectedStateAfter)

    expect(
      todosReducer([
        {
          completed: false,
          id: 0,
          text: 'Use Redux'
        }
      ],
        actionCreators.addTodo('Run the tests')
      )
    ).toEqual([
      {
        completed: false,
        id: 1,
        text: 'Run the tests'
      }, {
        completed: false,
        id: 0,
        text: 'Use Redux'
      }
    ])

    expect(
      todosReducer([
        {
          completed: false,
          id: 1,
          text: 'Run the tests'
        }, {
          completed: false,
          id: 0,
          text: 'Use Redux'
        }
      ],
        actionCreators.addTodo('Fix the tests')
      )
    ).toEqual([
      {
        completed: false,
        id: 2,
        text: 'Fix the tests'
      }, {
        completed: false,
        id: 1,
        text: 'Run the tests'
      }, {
        completed: false,
        id: 0,
        text: 'Use Redux'
      }
    ])
  })

  it('should handle DELETE_TODO', () => {
    expect(
      todosReducer([
        {
          completed: false,
          id: 1,
          text: 'Run the tests'
        }, {
          completed: false,
          id: 0,
          text: 'Use Redux'
        }
      ],
        actionCreators.deleteTodo(1)
      )
    ).toEqual([
      {
        completed: false,
        id: 0,
        text: 'Use Redux'
      }
    ])
  })

  it('should handle EDIT_TODO', () => {
    expect(
      todosReducer([
        {
          completed: false,
          id: 1,
          text: 'Run the tests'
        }, {
          completed: false,
          id: 0,
          text: 'Use Redux'
        }
      ],
        actionCreators.editTodo(1, 'Fix the tests')
      )
    ).toEqual([
      {
        completed: false,
        id: 1,
        text: 'Fix the tests'
      }, {
        completed: false,
        id: 0,
        text: 'Use Redux'
      }
    ])
  })

  it('should handle COMPLETE_TODO', () => {
    expect(
      todosReducer([
        {
          completed: false,
          id: 1,
          text: 'Run the tests'
        }, {
          completed: false,
          id: 0,
          text: 'Use Redux'
        }
      ],
        actionCreators.completeTodo(1)
      )
    ).toEqual([
      {
        completed: true,
        id: 1,
        text: 'Run the tests'
      }, {
        completed: false,
        id: 0,
        text: 'Use Redux'
      }
    ])
  })

  it('should handle COMPLETE_ALL', () => {
    expect(
      todosReducer([
        {
          completed: true,
          id: 1,
          text: 'Run the tests'
        }, {
          completed: false,
          id: 0,
          text: 'Use Redux'
        }
      ],
        actionCreators.completeAll()
      )
    ).toEqual([
      {
        completed: true,
        id: 1,
        text: 'Run the tests'
      }, {
        completed: true,
        id: 0,
        text: 'Use Redux'
      }
    ])

    // Unmark if all todos are currently completed
    expect(
      todosReducer([
        {
          completed: true,
          id: 1,
          text: 'Run the tests'
        }, {
          completed: true,
          id: 0,
          text: 'Use Redux'
        }
      ],
        actionCreators.completeAll()
      )
    ).toEqual([
      {
        completed: false,
        id: 1,
        text: 'Run the tests'
      }, {
        completed: false,
        id: 0,
        text: 'Use Redux'
      }
    ])
  })

  it('should handle CLEAR_COMPLETED', () => {
    expect(
      todosReducer([
        {
          completed: true,
          id: 1,
          text: 'Run the tests'
        }, {
          completed: false,
          id: 0,
          text: 'Use Redux'
        }
      ],
        actionCreators.clearCompleted()
      )
    ).toEqual([
      {
        completed: false,
        id: 0,
        text: 'Use Redux'
      }
    ])
  })

  it('should not generate duplicate ids after CLEAR_COMPLETED', () => {
    expect(
      [
        actionCreators.completeTodo(0),
        actionCreators.clearCompleted(),
        actionCreators.addTodo('Write more tests')
      ].reduce(todosReducer, [
        {
          completed: false,
          id: 0,
          text: 'Use Redux'
        }, {
          completed: false,
          id: 1,
          text: 'Write tests'
        }
      ])
    ).toEqual([
      {
        completed: false,
        id: 2,
        text: 'Write more tests'
      }, {
        completed: false,
        id: 1,
        text: 'Write tests'
      }
    ])
  })
})
