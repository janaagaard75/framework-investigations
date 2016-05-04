namespace TodoMVC {
    "use strict";

    export class FilterChannel {
        constructor() {
            if (FilterChannel.filterChannelInstance) {
                throw new Error("Use the instance property.");
            }

            FilterChannel.filterChannelInstance = this;

            this.filterState = new FilterState();
            this.channel = Backbone.Radio.channel("filter");
            this.channel.reply("filterState", () => {
                return this.filterState;
            });
        }

        public static get instance() {
            if (FilterChannel.filterChannelInstance === undefined) {
                FilterChannel.filterChannelInstance = new FilterChannel();
            }

            return FilterChannel.filterChannelInstance;
        }

        public getFilterState(): FilterState {
            return this.channel.request("filterState");
        }

        public channel: Backbone.Radio.Channel;
        private static filterChannelInstance: FilterChannel;
        private filterState: FilterState;
    }
}
