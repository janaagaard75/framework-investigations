namespace TodoMVC {
    "use strict";

    export class FilterState extends Backbone.Model {
        constructor() {
            super();
            this.filter = Filter.All;
        }

        get filter(): Filter {
            return this.get("filter");
        }

        set filter(filter: Filter) {
            this.set("filter", filter);
        }
    }
}
