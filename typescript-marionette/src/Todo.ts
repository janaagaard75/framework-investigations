namespace TodoMVC {
    "use strict";

    export class Todo extends Backbone.Model {
        defaults() {
            return {
                completed: false,
                created: 0,
                title: "ts"
            };
        }

        get completed(): boolean {
            return this.get("completed");
        }

        set completed(newValue: boolean) {
            this.set("completed", newValue);
        }

        // TODO: No need for a getter?
        // TODO: Should use a proper Date type.
        set created(newDate: number) {
            this.set("created", newDate);
        }

        get title(): string {
            return this.get("title");
        }

        set title(newTitle: string) {
            this.set("title", newTitle);
        }

        // TODO: Why not set this in the defaults method?
        initialize() {
            if (this.isNew()) {
                this.created = Date.now();
            }
        }

        matchesFilter(filter: Filter): boolean {
            switch (filter) {
                case "active":
                    return !this.completed;

                case "all":
                    return true;

                case "completed":
                    return this.completed;
            }

            throw `Unknown filter '${filter}'.`;
        }

        toggle(): Todo {
            this.completed = !this.completed;
            return this;
        }
    }
}
