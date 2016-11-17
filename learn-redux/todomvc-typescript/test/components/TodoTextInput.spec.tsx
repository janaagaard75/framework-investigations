// tslint:disable-next-line no-unused-variable
import * as React from 'react'
import * as TestUtils from 'react-addons-test-utils'
import TodoTextInput from '../../src/components/TodoTextInput'
const expect = require('expect')

function setup(propOverrides?: any) {
  const props = Object.assign({
    editing: false,
    newTodo: false,
    onSave: expect.createSpy(),
    placeholder: 'What needs to be done?',
    text: 'Use Redux'
  }, propOverrides)

  const renderer = TestUtils.createRenderer()

  renderer.render(
    <TodoTextInput {...props} />
  )

  const output = renderer.getRenderOutput()

  return {
    output: output,
    props: props,
    renderer: renderer
  }
}

describe('components', () => {
  describe('TodoTextInput', () => {
    it('should render correctly', () => {
      const { output } = setup()
      expect(output.props.placeholder).toEqual('What needs to be done?')
      expect(output.props.value).toEqual('Use Redux')
      expect(output.props.className).toEqual('')
    })

    it('should render correctly when editing=true', () => {
      const { output } = setup({ editing: true })
      expect(output.props.className).toEqual('edit')
    })

    it('should render correctly when newTodo=true', () => {
      const { output } = setup({ newTodo: true })
      expect(output.props.className).toEqual('new-todo')
    })

    it('should update value on change', () => {
      const { output, renderer } = setup()
      output.props.onChange({ target: { value: 'Use Radox' } })
      const updated = renderer.getRenderOutput()
      expect(updated.props.value).toEqual('Use Radox')
    })

    it('should call onSave on return key press', () => {
      const { output, props } = setup()
      output.props.onKeyDown({ target: { value: 'Use Redux' }, which: 13 })
      expect(props.onSave).toHaveBeenCalledWith('Use Redux')
    })

    it('should reset state on return key press if newTodo', () => {
      const { output, renderer } = setup({ newTodo: true })
      output.props.onKeyDown({ target: { value: 'Use Redux' }, which: 13 })
      const updated = renderer.getRenderOutput()
      expect(updated.props.value).toEqual('')
    })

    it('should call onSave on blur', () => {
      const { output, props } = setup()
      output.props.onBlur({ target: { value: 'Use Redux' } })
      expect(props.onSave).toHaveBeenCalledWith('Use Redux')
    })

    it('shouldnt call onSave on blur if newTodo', () => {
      const { output, props } = setup({ newTodo: true })
      output.props.onBlur({ target: { value: 'Use Redux' } })
      expect(props.onSave.calls.length).toBe(0)
    })
  })
})
