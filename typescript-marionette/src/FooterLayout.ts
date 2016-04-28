namespace TodoMVC {
    "use strict";

    export class FooterLayout extends Marionette.ItemView<Todo> {
        constructor() {
            super(/*{
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
            }*/);

            this.collection = arguments[0].collection;

            this.events = <any>{
                "click @ui.clear": this.onClearClick
            };
            this.delegateEvents();
        }

        filterChannelInstance: Backbone.Radio.Channel;

        get filterChannel() {
            if (this.filterChannelInstance === undefined) {
                // TODO: Wrap this nicely, so that the magic string isn't needed.
                this.filterChannelInstance = Backbone.Radio.channel("filter");
            }

            return this.filterChannelInstance;
        }

        template = "#template-footer";

        ui = {
            active: ".active a",
            all: ".all a",
            clear: "#clear-completed",
            completed: ".completed a",
            filters: "#filters a",
            summary: "#todo-count"
        };

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

        get filterElements(): JQuery {
            return <any>this.ui.filters;
        }

        // TODO: Is there really not a better way to access the elements in the UI array?
        getFilterElement(filter: Filter): JQuery {
            switch (filter) {
                case "active":
                    return <any>this.ui.active;

                case "all":
                    return <any>this.ui.all;

                case "completed":
                    return <any>this.ui.completed;
            }

            throw `Unknown filter '${filter}'.`;
        }

        initialize() {
            // TODO: Had to remove the last parameter.
            //this.listenTo(filterChannel.request("filterState"), "change:filter", this.updateFilterSelection, this);
            // TODO: Is it possible to wrap this request nicely in a class?
            // TODO: initialize is called by super(), so this.filterChannel is not yet initialized.
            this.listenTo(this.filterChannel.request("filterState"), "change:filter", this.updateFilterSelection);
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
            this.filterElements.removeClass("selected");
            const filterState: FilterState = this.filterChannel.request("filterState");
            this.getFilterElement(filterState.filter).addClass("selected");
        }

        onClearClick() {
            const completed = this.collection.getCompleted();
            completed.forEach(todo => {
                todo.destroy();
            });
        }
    }
}
