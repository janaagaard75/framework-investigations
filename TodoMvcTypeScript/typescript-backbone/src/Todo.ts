/** Our basic Todo model has title, order, and completed attributes. */
export default class Todo extends Backbone.Model {

    defaults() {
        return {
            completed: false,
            order: 0,
            title: ""
        };
    }

    get completed(): boolean {
        return super.get("completed");
    }

    get order(): number {
        return super.get("order");
    }

    get title(): string {
        return super.get("title");
    }

    set title(newTitle: string) {
        super.set("title", newTitle);
    }

    toggleCompleted() {
        // TODO: Is it really necessary to call save here? Doesn't Backbone do this automatically, meaning that it would have been enough to set the new value for completed?
        this.save({ completed: !this.completed });
    }
}
