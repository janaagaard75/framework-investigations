import { expect } from 'chai'

import { todosReducer } from '../client/todos/todosReducer'
import { Todos, Todo } from '../client/todos/model'

import {
  createAddTodo,
  createClearCompletedTodos,
  createDeleteTodo,
  createEditTodo,
  createToggleAllTodos,
  createToggleTodo
} from '../client/todos/actions'

describe('todos reducer', () => {
  it('handles add', () => {
    const beforeState: Todos = [{
      completed: true,
      id: 0,
      text: ''
    }]

    const afterState = todosReducer(beforeState, createAddTodo('hello'))

    expect(afterState[0]).to.deep.equal({
      completed: false,
      id: 1,
      text: 'hello'
    })
  })

  it('handles delete', () => {
    const beforeState: Todos = [{
      completed: false,
      id: 1,
      text: ''
    }]

    const afterState = todosReducer(beforeState, createDeleteTodo(1))

    expect(afterState).to.deep.equal([])
  })

  it('handles edit', () => {
    const beforeState: Todos = [{
      completed: false,
      id: 1,
      text: ''
    }]

    const afterState1 = todosReducer(beforeState, createEditTodo({
      newText: 'hello',
      todoId: 1
    }))

    expect(afterState1[0]).to.deep.equal({
      completed: false,
      id: 1,
      text: 'hello'
    })
  })

  it('handles complete all', () => {
    const state1: Todos = [{
      completed: false,
      id: 1,
      text: ''
    }]

    const state2 = todosReducer(state1, createToggleTodo(1))

    expect(state2[0]).to.deep.equal({
      completed: true,
      id: 1,
      text: ''
    })

    const state3 = todosReducer(state2, createToggleTodo(1))

    expect(state3[0]).to.deep.equal({
      completed: false,
      id: 1,
      text: ''
    })
  })

  it('handles complete all', () => {
    const state1: Todos = [
      { completed: false, id: 1, text: '' },
      { completed: true, id: 2, text: '' },
      { completed: false, id: 3, text: '' }
    ]

    const state2 = todosReducer(state1, createToggleAllTodos())

    expect(state2).to.deep.equal([
      { completed: true, id: 1, text: '' },
      { completed: true, id: 2, text: '' },
      { completed: true, id: 3, text: '' }
    ])

    const state3 = todosReducer(state2, createToggleAllTodos())

    expect(state3).to.deep.equal([
      { completed: false, id: 1, text: '' },
      { completed: false, id: 2, text: '' },
      { completed: false, id: 3, text: '' }
    ])
  })

  it('handles clear completed', () => {
    let beforeState: Todos = [
      { completed: false, id: 1, text: '' },
      { completed: true, id: 2, text: '' }
    ]

    const afterState = todosReducer(beforeState, createClearCompletedTodos())

    expect(afterState).to.deep.equal([{
      completed: false,
      id: 1,
      text: ''
    }])
  })
})