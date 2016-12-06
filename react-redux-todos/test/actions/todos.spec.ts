import { expect } from 'chai'

import { createAddTodo } from '../../src/actions/actionCreators'
import { createToggleTodo } from '../../src/actions/actionCreators'

// TODO: Fix the tests. They are no longer correct after the filter was converted to an enumeration.
describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    const actual = createAddTodo({ text: 'Use Redux' })
    const expected = {
      payload: {
        text: 'Use Redux'
      },
      type: 'ADD_TODO'
    }
    expect(actual).to.deep.equal(expected)
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(createToggleTodo({ id: 1 })).to.deep.equal({
      payload: {
        id: 1
      },
      type: 'TOGGLE_TODO'
    })
  })
})