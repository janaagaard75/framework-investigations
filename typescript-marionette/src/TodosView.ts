namespace TodoMVC {
    "use strict";

    // TODO: Isn't there a better way to introduce the checked property?
    class CheckboxEventTarget extends EventTarget {
        checked: boolean;
    }

    class CheckboxEvent extends Event {
        currentTarget: CheckboxEventTarget;
    }

    // Controls the rendering of the list of items, including the filtering of activs vs completed items for display.
    export class TodosView extends Marionette.CompositeView<Todo, TodoView> {
        constructor(todos: TodoCollection) {
            super({
                childViewContainer: "#todo-list"
            });

            this.collection = todos;

            this.events = <any>{
                "click @ui.toggle": "onToggleAllClick"
            };
            this.delegateEvents();
        }

        childView = TodoMVC.TodoView;

        collectionEvents = {
            "change:completed": "render",
            "all": "setCheckAllState"
        };

        filterChannelInstance: Backbone.Radio.Channel;

        template = "#todosViewTemplate";

        ui = {
            toggle: "#toggle-all"
        };

        get filterChannel() {
            if (this.filterChannelInstance === undefined) {
                // TODO: Wrap this nicely, so that the magic string isn't needed.
                this.filterChannelInstance = Backbone.Radio.channel("filter");
            }

            return this.filterChannelInstance;
        }

        get toggleElement(): JQuery {
            return <any>this.ui.toggle as JQuery;
        }

        filter(child: Todo) {
            const filteredOn = this.filterChannel.request("filterState").get("filter") as Filter;
            return child.matchesFilter(filteredOn);
        }

        initialize() {
            this.listenTo(this.filterChannel.request("filterState"), "change:filter", this.render);
        }

        onToggleAllClick(e: CheckboxEvent) {
            const isChecked = e.currentTarget.checked;

            this.collection.each(function (todo: Todo) {
                todo.save({ completed: isChecked });
            });
        }

        setCheckAllState() {
            function reduceCompleted(left: Todo, right: Todo) {
                // TODO: This would benefit from some type checking.
                return left && right.get("completed");
            }

            // TODO: Is using a reduce really the easiet solution here?
            // TODO: The type of the collection is the generic Backbone.Collection<Todo>. It should be TodoCollection.
            const allCompleted = this.collection.reduce(reduceCompleted, true);
            this.toggleElement.prop("checked", allCompleted);
            this.$el.parent().toggle(!!this.collection.length);
        }
    }
}