import State from "State";

export default class TodoRouter extends Backbone.Router {

    constructor() {
        super();
        (<any>this)._bindRoutes();
    }

    routes = {
        "*filter": "setFilter"
    };

    setFilter(filter: string = "") {
        // Trigger a collection filter event, causing hiding/unhiding of todo view items.
        State.instance.todos.trigger("filter", filter);
    }
}
