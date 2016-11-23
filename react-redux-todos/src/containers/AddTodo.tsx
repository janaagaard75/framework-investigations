// tslint:disable-next-line no-unused-variable
import * as React from 'react'
import { connect } from 'react-redux'

import { createAddTodo } from '../actions/createAddTodo'
import { RootStore } from '../model/RootStore'

const addTodoFactory = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(createAddTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  )
}

// TODO: Add types to the connect method: TStateProps, TDispatchProps, TOwnProps and maybe also TMergedProps.
// tslint:disable-next-line variable-name
export const AddTodo = connect()(addTodoFactory)