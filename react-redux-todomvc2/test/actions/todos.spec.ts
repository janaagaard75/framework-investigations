import { actionCreators } from '../../src/actions'
import { actionTypes } from '../../src/actions'
const expect = require('expect')

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    const actual = actionCreators.addTodo('Use Redux')
    const expected = {
      payload: 'Use Redux',
      type: 'ADD_TODO'
    }
    expect(actual).toEqual(expected)
  })

  it('clearCompleted should create CLEAR_COMPLETED action', () => {
    const actual = actionCreators.clearCompleted()
    const expected = {
      type: actionTypes.CLEAR_COMPLETED
    }
    expect(actual).toEqual(expected)
  })

  it('completeAll should create COMPLETE_ALL action', () => {
    expect(actionCreators.completeAll()).toEqual({
      type: actionTypes.COMPLETE_ALL
    })
  })

  it('completeTodo should create COMPLETE_TODO action', () => {
    expect(actionCreators.completeTodo(1)).toEqual({
      payload: 1,
      type: actionTypes.COMPLETE_TODO
    })
  })

  it('deleteTodo should create DELETE_TODO action', () => {
    expect(actionCreators.deleteTodo(1)).toEqual({
      payload: 1,
      type: actionTypes.DELETE_TODO
    })
  })

  it('editTodo should create EDIT_TODO action', () => {
    expect(actionCreators.editTodo(1, 'Use Redux everywhere')).toEqual({
      payload: {
        id: 1,
        newText: 'Use Redux everywhere'
      },
      type: actionTypes.EDIT_TODO
    })
  })
})
