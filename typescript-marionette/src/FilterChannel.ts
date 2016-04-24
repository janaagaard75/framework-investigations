namespace TodoMVC {
    "use strict";

    export enum Filter {
        Active,
        All,
        Completed
    }

    export class FilterChannel {
        private static channel = Backbone.Radio.channel("filter");

        static get state(): any {
            return FilterChannel.channel.request("filterState");
        }

        static get filter(): Filter {
            return this.state.get("filter");
        }

        static set filter(filter: Filter) {
            this.state.set("filter", filter);
        }
    }
}
