import { expect } from 'chai'
import { addTodo } from '../../src/actions/addTodo'
import { setVisibilityFilter } from '../../src/actions/setVisibilityFilter'
import { toggleTodo } from '../../src/actions/toggleTodo'

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    const actual = addTodo('Use Redux')
    const expected = {
      payload: 'Use Redux',
      type: 'ADD_TODO'
    }
    expect(actual).to.deep.equal(expected)
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(setVisibilityFilter('active')).to.deep.equal({
      payload: 'active',
      type: 'SET_VISIBILITY_FILTER'
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(toggleTodo(1)).to.deep.equal({
      payload: 1,
      type: 'TOGGLE_TODO'
    })
  })
})