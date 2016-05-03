namespace TodoMVC {
    "use strict";

    // TODO: This file sets up the filter channel, but not in a very object oriented way.

    const filterState = new FilterState();

    const filterChannel = Backbone.Radio.channel("filter");
    filterChannel.reply("filterState", () => {
        return filterState;
    });
}
