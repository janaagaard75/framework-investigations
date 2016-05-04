namespace TodoMVC {
    "use strict";

    export class FooterView extends Marionette.ItemView<Todo> {
        constructor(todos: TodoCollection) {
            super();

            this.collection = todos;

            this.events = <any>{
                "click @ui.clear": this.onClearClick
            };
            this.delegateEvents();
        }

        // TODO: Is this really enough to specify that the collection supplied is a TodoCollection and not a generic Backbone.Collection<Todo>?
        collection: TodoCollection;

        collectionEvents = {
            all: "render"
        };

        filterChannelInstance: Backbone.Radio.Channel;

        template = "#footerTemplate";

        templateHelpers = {
            // TODO: Why not simply put everything in serializeData?
            activeCountLabel: () => {
                //return (this.activeCount === 1 ? "item" : "items") + " left";
                return (this.collection.getActive().length === 1 ? "item" : "items") + " left";
            }
        };

        ui = {
            active: ".active a",
            all: ".all a",
            clear: "#clear-completed",
            completed: ".completed a",
            filters: "#filters a",
            summary: "#todo-count"
        };

        get filterChannel() {
            if (this.filterChannelInstance === undefined) {
                // TODO: Wrap this nicely, so that the magic string isn't needed.
                this.filterChannelInstance = Backbone.Radio.channel("filter");
            }

            return this.filterChannelInstance;
        }

        get filterElements(): JQuery {
            return <any>this.ui.filters as JQuery;
        }

        // TODO: Is there really not a better way to access the elements in the UI array?
        getFilterElement(filter: Filter): JQuery {
            switch (filter) {
                case "active":
                    return <any>this.ui.active as JQuery;

                case "all":
                    return <any>this.ui.all as JQuery;

                case "completed":
                    return <any>this.ui.completed as JQuery;
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

        onClearClick() {
            const completed = this.collection.getCompleted();
            completed.forEach(todo => {
                todo.destroy();
            });
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

        updateFilterSelection() {
            this.filterElements.removeClass("selected");
            const filterState: FilterState = this.filterChannel.request("filterState");
            this.getFilterElement(filterState.filter).addClass("selected");
        }
    }
}
