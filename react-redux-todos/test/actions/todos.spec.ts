import { expect } from 'chai'
import { addTodo } from '../../src/actions/addTodo'
import { setVisibilityFilter } from '../../src/actions/setVisibilityFilter'
import { toggleTodo } from '../../src/actions/toggleTodo'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    const actual = addTodo('Use Redux')
    const expected = {
      meta: {},
      payload: 'Use Redux',
      type: 'ADD_TODO'
    }
    expect(actual).to.deep.equal(expected)
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(setVisibilityFilter('SHOW_ACTIVE')).to.deep.equal({
      meta: {},
      payload: 'SHOW_ACTIVE',
      type: 'SET_VISIBILITY_FILTER'
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(toggleTodo(1)).to.deep.equal({
      meta: {},
      payload: 1,
      type: 'TOGGLE_TODO'
    })
  })
})