namespace TodoMVC {
    "use strict";

    export type TaskFilter = "" | "all" | "active"

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

        get title(): string {
            return this.get("title");
        }

        set title(newTitle: string) {
            this.set("title", newTitle);
        }

        // TODO: Should use a date behind the scenes instead.
        set created(newDate: number) {
            this.set("created", newDate);
        }

        // TODO: Why not set this in the defaults method?
        initialize() {
            if (this.isNew()) {
                this.created = Date.now();
            }
        }

        toggle(): Todo {
            this.completed = !this.completed;
            return this;
        }

        matchesFilter (filter: TaskFilter): boolean {
            if (filter === "all") {
                return true;
            }

            if (filter === "active") {
                return !this.completed;
            }

            return this.completed;
        }
    }
}
