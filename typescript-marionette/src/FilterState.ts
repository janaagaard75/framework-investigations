namespace TodoMVC {
    "use strict";

    // TODO: Use an enum when everything has been converted to TypeScript.
    export enum Filter {
        Active,
        All,
        Completed
    }
    // export type Filter = "active" | "all" | "completed";

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
