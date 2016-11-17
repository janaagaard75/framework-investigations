import KeyCode from "KeyCode";
import State from "State";
import Todo from "Todo";

/** The DOM element for a todo item. */
export default class TodoView extends Backbone.View<Todo> {

    constructor(todo: Todo) {
        // TODO: Why do the events have to be specified before calling super? This is not the case for AppView.
        super({
            model: todo,
            tagName: "li"
        });

        this.events = <any>{
            "blur .edit": this.close,
            "click .check": this.toggleCompleted,
            "click .destroy": this.destroy,
            "dblclick .todo-content": this.edit,
            "keydown .edit": this.revertOnEscape,
            "keypress .edit": this.updateOnEnter
        };

        // Call delegateEvents manually since events were defined after super was called.
        this.delegateEvents();

        // Cache the template function for a single item.
        this.template = _.template($("#item-template").html());

        _.bindAll(this, "render", "close", "remove", "toggleVisible");
        this.model.bind("change", this.render);
        this.model.bind("destroy", this.remove);
        this.model.bind("visible", this.toggleVisible);
    }

    private input: JQuery;
    // The TodoView listens for changes to its model, re-rendering. Since there's a one-to-one correspondence between a Todo and a TodoView in this app, we set a direct reference on the model for convenience.
    private template: (data: any) => string;

    /** Re-render the contents of the todo item. */
    render() {
        this.$el
            .html(this.template(this.model.toJSON()))
            .toggleClass("completed", this.model.completed);
        this.toggleVisible();
        this.input = this.$(".todo-input");
        return this;
    }

    /** Close the editing mode, saving changes to the todo. */
    private close() {
        const trimmedValue = this.input.val().trim();

        if (trimmedValue) {
            this.model.save({ title: trimmedValue });
        } else {
            this.destroy();
        }

        this.$el.removeClass("editing");
    }

    /** Remove the item by destroying the model. */
    private destroy() {
        this.model.destroy();
    }

    /** Switch this view into editing mode, displaying the input field. */
    private edit() {
        this.$el.addClass("editing");
        this.input.focus();
    }

    /** Toggle the completed state of the model. */
    private toggleCompleted() {
        this.model.toggleCompleted();
    }

    private toggleVisible() {
        const hidden =
            (State.instance.taskFilter === "completed" && !this.model.completed) ||
            (State.instance.taskFilter === "active" && this.model.completed);
        this.$el.toggleClass("hidden", hidden);
    }

    /** If you're pressing Escape we revert your change by simply leaving the editing state. */
    private revertOnEscape(e: KeyboardEvent) {
        if (e.which === KeyCode.Escape) {
            this.$el.removeClass("editing");
            // Also reset the hidden input back to the original value.
            this.input.val(this.model.title);
        }
    }

    /** If you hit Enter, we're through editing the item. */
    private updateOnEnter(e: KeyboardEvent) {
        if (e.which === KeyCode.Enter) {
            this.close();
        }
    }
}
