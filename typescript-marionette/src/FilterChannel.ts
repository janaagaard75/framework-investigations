namespace TodoMVC {
    "use strict";

    // TODO: This file sets up the filter channel, but not in a very object oriented way.
    // TODO: filterChannel should extend Backbone.Channel and be a singleton or have some kind of getInstance, that would call Backbone.Radio.channel("filter").

    const filterState = new FilterState();

    const filterChannel = Backbone.Radio.channel("filter");
    filterChannel.reply("filterState", () => {
        return filterState;
    });
}
