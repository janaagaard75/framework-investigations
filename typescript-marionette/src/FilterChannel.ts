namespace TodoMVC {
    "use strict";

    export class FilterChannel {
        constructor() {
            if (FilterChannel.instance) {
                throw new Error("use getInstance().");
            }

            FilterChannel.instance = this;

            this.filterState = new FilterState();
            this.channel = Backbone.Radio.channel("filter");
            this.channel.reply("filterState", () => {
                return this.filterState;
            });
        }

        public static getInstance() {
            if (FilterChannel.instance === undefined) {
                FilterChannel.instance = new FilterChannel();
            }

            return FilterChannel.instance;
        }

        public getFilterState(): FilterState {
            return this.channel.request("filterState");
        }

        public channel: Backbone.Radio.Channel;
        private static instance: FilterChannel;
        private filterState: FilterState;
    }
}
