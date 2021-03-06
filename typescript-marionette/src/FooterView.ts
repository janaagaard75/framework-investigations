namespace TodoMVC {
    "use strict";

    interface FooterViewOptions {
        collection: TodoCollection;
    }

    export class FooterView extends Marionette.ItemView<Todo> {
        constructor(options: FooterViewOptions) {
            super();

            this.collection = options.collection;

            this.events = <any>{
                "click @ui.clear": this.onClearClick
            };
            this.delegateEvents();
        }

        collection: TodoCollection;

        collectionEvents = {
            all: "render"
        };

        template = "#footerTemplate";

        templateHelpers = {
            activeCountLabel: () => {
                return (this.collection.getActive().length === 1 ? "item" : "items") + " left";
            }
        };

        ui = {
            active: ".active a",
            all: ".all a",
            clear: ".js-clear-completed",
            completed: ".completed a",
            filters: ".js-filters a",
            summary: ".js-todo-count"
        };

        initialize() {
            this.listenTo(FilterChannel.filterState, "change:filter", this.updateFilterSelection);
        }

        onRender() {
            this.$el.parent().toggle(this.collection.length > 0);
            this.updateFilterSelection();
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

        private get filterElements(): JQuery {
            return <any>this.ui.filters as JQuery;
        }

        // TODO: Is there really not a better way to access the elements in the UI array?
        private getFilterElement(filter: Filter): JQuery {
            switch (filter) {
                case Filter.Active:
                    return <any>this.ui.active as JQuery;

                case Filter.All:
                    return <any>this.ui.all as JQuery;

                case Filter.Completed:
                    return <any>this.ui.completed as JQuery;
            }

            throw `Unknown filter '${filter}'.`;
        }

        private onClearClick() {
            const completed = this.collection.getCompleted();
            completed.forEach(todo => {
                todo.destroy();
            });
        }

        private updateFilterSelection() {
            this.filterElements.removeClass("selected");
            this.getFilterElement(FilterChannel.filterState.filter).addClass("selected");
        }
    }
}
