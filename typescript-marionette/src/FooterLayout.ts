namespace TodoMVC {
    "use strict";

    export class FooterLayout extends Marionette.CollectionView<Todo, TodoView> {
        constructor() {
            super({
                events: {
                    "click @ui.clear": "onClearClick"
                },
                ui: <any>{
                    active: ".active a",
                    all: ".all a",
                    clear: "#clear-completed",
                    completed: ".completed a",
                    filters: "#filters a",
                    summary: "#todo-count"
                }
            });

            this.collection = arguments[0].collection;

            // this.events = <any>{
            //     "click @ui.clear": this.onClearClick
            // };
            // this.delegateEvents();
        }

        template = "#template-footer";

        // ui = {
        //     active: ".active a",
        //     all: ".all a",
        //     clear: "#clear-completed",
        //     completed: ".completed a",
        //     filters: "#filters a",
        //     summary: "#todo-count"
        // };

        // TODO: Is this really enough to specify that the collection supplied is a TodoList and not a generic Backbone.Collection<Todo>?
        collection: TodoList;

        collectionEvents = {
            all: "render"
        };

        templateHelpers = {
            // TODO: Why not simply put everything in serializeData?
            activeCountLabel: () => {
                //return (this.activeCount === 1 ? "item" : "items") + " left";
                return (this.collection.getActive().length === 1 ? "item" : "items") + " left";
            }
        };

        get filtersElements(): JQuery {
            return <any>this.ui.filters;
        }

        // TODO: Is there really not a better way to access the elements in the UI array?
        getFilterElement(filter: Filter): JQuery {
            switch (filter) {
                case Filter.Active:
                    return <any>this.ui.active;

                case Filter.All:
                    return <any>this.ui.all;

                case Filter.Completed:
                    return <any>this.ui.completed;
            }

            throw "Unknown filter string.";
        }

        initialize() {
            // TODO: Had to remove the last parameter.
            //this.listenTo(filterChannel.request("filterState"), "change:filter", this.updateFilterSelection, this);
            this.listenTo(FilterChannel.state, "change:filter", this.updateFilterSelection);
        }

        serializeData() {
            const active = this.collection.getActive().length;
            const total = this.collection.length;

            return {
                activeCount: active,
                completedCount: total - active,
                totalCount: total
            };
        }

        onRender() {
            this.$el.parent().toggle(this.collection.length > 0);
            this.updateFilterSelection();
        }

        updateFilterSelection() {
            this.filtersElements.removeClass("selected");
            this.getFilterElement(FilterChannel.filter).addClass("selected");
        }

        onClearClick() {
            const completed = this.collection.getCompleted();
            completed.forEach(todo => {
                todo.destroy();
            });
        }
    }
}
