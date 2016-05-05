namespace TodoMVC {
    "use strict";

    interface CheckboxEventTarget extends EventTarget {
        checked: boolean;
    }

    interface CheckboxEvent extends Event {
        currentTarget: CheckboxEventTarget;
    }

    interface TodosViewOptions {
        collection: TodoCollection;
    }

    /** Controls the rendering of the list of items, including the filtering of activs vs completed items for display. */
    export class TodosView extends Marionette.CompositeView<Todo, TodoView> {
        constructor(options: TodosViewOptions) {
            super({
                childViewContainer: ".js-todo-list"
            });

            this.collection = options.collection;

            this.events = <any>{
                "click @ui.toggle": this.onToggleAllClick
            };
            this.delegateEvents();
        }

        childView = TodoView;

        collection: TodoCollection;

        collectionEvents = {
            "change:completed": this.render,
            "all": this.setCheckAllState
        };

        template = "#todosViewTemplate";

        ui = {
            toggle: ".js-toggle-all"
        };

        private get toggleElement(): JQuery {
            return <any>this.ui.toggle as JQuery;
        }

        filter(child: Todo) {
            const filteredOn = FilterChannel.filterState.filter;
            return child.matchesFilter(filteredOn);
        }

        initialize() {
            this.listenTo(FilterChannel.filterState, "change:filter", this.render);
        }

        private onToggleAllClick(e: CheckboxEvent) {
            const isChecked = e.currentTarget.checked;

            this.collection.each((todo: Todo) => {
                todo.save({ completed: isChecked });
            });
        }

        private setCheckAllState() {
            // TODO: This code here is pretty weird. Clean it up.
            this.toggleElement.prop("checked", this.collection.allCompleted());
            this.$el.parent().toggle(this.collection.length > 0);
        }
    }
}