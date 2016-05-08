import NowShowingFilter from "./NowShowingFilter";

export type ChangeFunction = () => any;

export interface IAppProps {
  model: ITodoModel;
}

export interface IAppState {
  editing?: string;
  nowShowing?: NowShowingFilter;
}

export interface ITodoFooterProps {
  completedCount: number;
  onClearCompleted: any;
  nowShowing: NowShowingFilter;
  count: number;
}

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface ITodoItemProps {
  key: string;
  todo: ITodo;
  editing?: boolean;
  onSave: (val: any) => void;
  onDestroy: () => void;
  onEdit: () => void;
  onCancel: (event: any) => void;
  onToggle: () => void;
}

export interface ITodoItemState {
  editText: string;
}

export interface ITodoModel {
  key: any;
  todos: Array<ITodo>;
  onChanges: Array<ChangeFunction>;
  subscribe(onChange: ChangeFunction);
  inform();
  addTodo(title: string);
  toggleAll(checked: boolean);
  toggle(todoToToggle: ITodo);
  destroy(todo: ITodo);
  save(todoToSave: ITodo, text: string);
  clearCompleted();
}
