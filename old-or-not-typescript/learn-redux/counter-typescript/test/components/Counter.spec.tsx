import * as expect from 'expect'
// tslint:disable-next-line no-unused-variable
import * as React from 'react'
import { shallow } from 'enzyme'
import Counter from '../../src/components/Counter'

function setup(value = 0) {
  const actions = {
    onDecrement: expect.createSpy() as expect.ISpy & (() => void),
    onIncrement: expect.createSpy() as expect.ISpy & (() => void)
  }
  const component = shallow(
    <Counter value={value} {...actions} />
  )

  return {
    actions: actions,
    buttons: component.find('button'),
    component: component,
    p: component.find('p')
  }
}

describe('Counter component', () => {
  it('should display count', () => {
    const { p } = setup()
    expect(p.text()).toMatch(/^Clicked: 0 times/)
  })

  it('first button should call onIncrement', () => {
    const { buttons, actions } = setup()
    buttons.at(0).simulate('click')
    expect(actions.onIncrement).toHaveBeenCalled()
  })

  it('second button should call onDecrement', () => {
    const { buttons, actions } = setup()
    buttons.at(1).simulate('click')
    expect(actions.onDecrement).toHaveBeenCalled()
  })

  it('third button should not call onIncrement if the counter is even', () => {
    const { buttons, actions } = setup(42)
    buttons.at(2).simulate('click')
    expect(actions.onIncrement).toNotHaveBeenCalled()
  })

  it('third button should call onIncrement if the counter is odd', () => {
    const { buttons, actions } = setup(43)
    buttons.at(2).simulate('click')
    expect(actions.onIncrement).toHaveBeenCalled()
  })

  it('third button should call onIncrement if the counter is odd and negative', () => {
    const { buttons, actions } = setup(-43)
    buttons.at(2).simulate('click')
    expect(actions.onIncrement).toHaveBeenCalled()
  })

  it('fourth button should call onIncrement in a second', (done) => {
    const { buttons, actions } = setup()
    buttons.at(3).simulate('click')
    setTimeout(() => {
      expect(actions.onIncrement).toHaveBeenCalled()
      done()
    }, 1000)
  })
})
