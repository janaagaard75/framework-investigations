namespace TodoMVC {
    "use strict";

    export class Todo extends Backbone.Model {
        defaults() {
            return {
                completed: false,
                created: Date.now(),
                title: "ts"
            };
        }

        get completed(): boolean {
            return this.get("completed");
        }

        set completed(newValue: boolean) {
            this.set("completed", newValue);
        }

        set created(newDate: number) {
            this.set("created", newDate);
        }

        get title(): string {
            return this.get("title");
        }

        set title(newTitle: string) {
            this.set("title", newTitle);
        }

        matchesFilter(filter: Filter): boolean {
            switch (filter) {
                case Filter.Active:
                    return !this.completed;

                case Filter.All:
                    return true;

                case Filter.Completed:
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
