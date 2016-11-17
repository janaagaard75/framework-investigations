namespace TodoMVC {
    "use strict";

    export class FilterChannel {
        constructor() {
            if (FilterChannel.filterChannelInstance) {
                throw new Error("Use the instance property.");
            }

            FilterChannel.filterChannelInstance = this;

            // TODO: This singleton is all about only new'ing the FilterState once. It should be possible to build this in a simpler fashion.
            this.filterStateInstance = new FilterState();
            this.channel = Backbone.Radio.channel("filter");
            this.channel.reply(FilterChannel.filterStateId, () => {
                return this.filterStateInstance;
            });
        }

        public channel: Backbone.Radio.Channel;
        private static filterChannelInstance: FilterChannel;
        private static filterStateId = "filterState";
        private filterStateInstance: FilterState;

        public static get instance() {
            if (FilterChannel.filterChannelInstance === undefined) {
                FilterChannel.filterChannelInstance = new FilterChannel();
            }

            return FilterChannel.filterChannelInstance;
        }

        public static get filterState(): FilterState {
            return FilterChannel.instance.channel.request(FilterChannel.filterStateId);
        }
    }
}
