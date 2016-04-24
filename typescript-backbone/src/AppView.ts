import KeyCode from "KeyCode";
import State, { TaskFilter } from "State";
import Todo from "Todo";
import TodoRouter from "TodoRouter";
import TodoView from "TodoView";

/** Our overall AppView is the top-level piece of UI. */
export default class AppView extends Backbone.View<any> {

    constructor() {
        super();
        // Instead of generating a new element, bind to the existing skeleton of the app already present in the HTML.

        // Delegated events for creating new items, and clearing completed ones.
        this.events = <any>{
            "click .todo-clear button": this.clearCompleted,
            "click .toggle-all": this.toggleAllComplete,
            "keypress .new-todo": this.createOnEnter
        };

        // setElement also calls delegateEvents.
        this.setElement($(".todoapp").get(0), true);

        // At initialization we bind to the relevant events on the todos collection, when items are added or changed. Kick things off by loading any preexisting todos that might be saved in localStorage.
        _.bindAll(this, "addOne", "addAll", "filter", "render", "toggleAllComplete");

        this.input = this.$(".new-todo");
        this.allCheckbox = this.$(".toggle-all")[0] as HTMLInputElement;
        this.mainElement = this.$(".main")[0];
        this.footerElement = this.$(".footer")[0];
        this.statsTemplate = _.template($("#stats-template").html());

        State.instance.todos.bind("add", this.addOne);
        State.instance.todos.bind("all", this.render);
        State.instance.todos.bind("change:completed", this.filterOne);
        State.instance.todos.bind("filter", this.filter);
        State.instance.todos.bind("reset", this.addAll);
        State.instance.todos.fetch();

        // Initialize the router, showing the selected view.
        /* tslint:disable no-unused-expression */
        new TodoRouter();
        /* tslint:enable */
        Backbone.history.start();
    }

    private allCheckbox: HTMLInputElement;
    private footerElement: HTMLElement;
    private input: JQuery;
    private mainElement: HTMLElement;
    private statsTemplate: (params: any) => string;

    /** Re-rendering the application just means refreshing the statistics -- the rest of the app doesn't change. */
    render() {
        const completed = State.instance.todos.completed().length;
        const remaining = State.instance.todos.remaining().length;

        if (State.instance.todos.length) {
            this.mainElement.style.display = "block";
            this.footerElement.style.display = "block";

            this.$(".todo-stats").html(this.statsTemplate({
                completed: completed,
                remaining: remaining,
                total: State.instance.todos.length
            }));

            this.$(".filters li a")
                .removeClass("selected")
                .filter(`[href="#/${State.instance.taskFilter}"]`)
                .addClass("selected");

        } else {
            this.mainElement.style.display = "none";
            this.footerElement.style.display = "none";
        }

        this.allCheckbox.checked = (remaining === 0);

        return this;
    }

    /** Add all items in the todos collection at once. */
    private addAll() {
        State.instance.todos.each(this.addOne);
    }

    /** Add a single todo item to the list by creating a view for it, and appending its element to the <ul>. */
    private addOne(todo: Todo) {
        const view = new TodoView(todo);
        this.$(".todo-list").append(view.render().el);
    }

    /** Clear all completed todo items, destroying their models. */
    private clearCompleted() {
        State.instance.todos.completed().forEach(todo => todo.destroy());
        return false;
    }

    /** If you hit Enter in the main input field, create new Todo model, persisting it to localStorage. */
    private createOnEnter(e: KeyboardEvent) {
        if (e.which === KeyCode.Enter && this.input.val().trim()) {
            State.instance.todos.create(this.newAttributes());
            this.input.val("");
        }
    }

    /** Filter out completed/remaining tasks. */
    private filter(criteria: TaskFilter) {
        State.instance.taskFilter = criteria;
        this.filterAll();
    }

    private filterAll() {
        State.instance.todos.each(this.filterOne);
    }

    private filterOne(todo: Todo) {
        todo.trigger("visible");
    }

    /** Generate the attributes for a new Todo item. */
    private newAttributes() {
        return {
            completed: false,
            order: State.instance.todos.nextOrder(),
            title: this.input.val().trim()
        };
    }

    private toggleAllComplete() {
        const completed = this.allCheckbox.checked;
        State.instance.todos.each(todo => todo.save({ "completed": completed }));
    }
}
