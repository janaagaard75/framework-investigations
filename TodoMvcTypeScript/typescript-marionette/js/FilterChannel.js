var TodoMVC;
(function (TodoMVC) {
    "use strict";
    var FilterChannel = (function () {
        function FilterChannel() {
            var _this = this;
            if (FilterChannel.filterChannelInstance) {
                throw new Error("Use the instance property.");
            }
            FilterChannel.filterChannelInstance = this;
            this.filterStateInstance = new TodoMVC.FilterState();
            this.channel = Backbone.Radio.channel("filter");
            this.channel.reply(FilterChannel.filterStateId, function () {
                return _this.filterStateInstance;
            });
        }
        Object.defineProperty(FilterChannel, "instance", {
            get: function () {
                if (FilterChannel.filterChannelInstance === undefined) {
                    FilterChannel.filterChannelInstance = new FilterChannel();
                }
                return FilterChannel.filterChannelInstance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FilterChannel, "filterState", {
            get: function () {
                return FilterChannel.instance.channel.request(FilterChannel.filterStateId);
            },
            enumerable: true,
            configurable: true
        });
        FilterChannel.filterStateId = "filterState";
        return FilterChannel;
    }());
    TodoMVC.FilterChannel = FilterChannel;
})(TodoMVC || (TodoMVC = {}));
//# sourceMappingURL=FilterChannel.js.map