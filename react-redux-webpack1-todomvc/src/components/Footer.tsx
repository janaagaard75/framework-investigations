import * as classnames from 'classnames'
import * as React from 'react'
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../constants/TodoFilters'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

interface PropTypes {
  completedCount: number,
  activeCount: number,
  filter: string,
  onClearCompleted: () => void,
  onShow: (filter: string) => void
}

class Footer extends React.Component<PropTypes, any> {
  renderTodoCount() {
    // const { activeCount } = this.props
    const itemWord = this.props.activeCount === 1 ? 'item' : 'items'

    return (
      <span className="todo-count">
        <strong>{this.props.activeCount || 'No'}</strong> {itemWord} left
      </span>
    )
  }

  renderFilterLink(filter: string) {
    const title = FILTER_TITLES[filter]
    //const { filter: selectedFilter, onShow } = this.props

    return (
      <a
        className={classnames({selected: filter === this.props.filter})}
        style={{cursor: 'pointer'}}
        onClick={() => this.props.onShow(filter)}
      >
        {title}
      </a>
    )
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <button
          className="clear-completed"
          onClick={onClearCompleted}
        >
          Clear completed
        </button>
      )
    }
  }

  render() {
    return (
      <footer className="footer">
        {this.renderTodoCount() }
        <ul className="filters">
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    )
  }
}

export default Footer
