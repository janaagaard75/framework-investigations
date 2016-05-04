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
            this.channel.reply(this.filterStateId, () => {
                return this.filterState;
            });
        }

        private filterStateId = "filterState";

        public static get instance() {
            if (FilterChannel.filterChannelInstance === undefined) {
                FilterChannel.filterChannelInstance = new FilterChannel();
            }

            return FilterChannel.filterChannelInstance;
        }

        public requestFilterState(): FilterState {
            return this.channel.request(this.filterStateId);
        }

        public channel: Backbone.Radio.Channel;
        private static filterChannelInstance: FilterChannel;
        private filterState: FilterState;
    }
}
