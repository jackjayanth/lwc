import { LightningElement, track} from 'lwc';

export default class TodoApp extends LightningElement {
    @track todos = [];
    connectedCallback(){
        this.populateTodos();
    }
    addTodoHandler() {
        const inputBox = this.template.querySelector("lightning-input");
        const todo = { todoId:this.todos.length, todoName: inputBox.value, done: false, todoDate: new Date()};
        this.todos.push(todo);
        inputBox.value="";
    }

    get upcomingTodos() {
        return this.todos && this.todos.length
          ? this.todos.filter(todo => !todo.done)
          : [];
      }
    
      get completedTodos() {
        return this.todos && this.todos.length
          ? this.todos.filter(todo => todo.done)
          : [];
      }

      populateTodos(){
          const todos=[
              {
                todoId:0, todoName: "Go for a walk", done: true, todoDate: new Date()
              },
              {
                todoId:1, todoName: "Do the dishes", done: false, todoDate: new Date()
              },
              {
                todoId:2, todoName: "Clean the garden", done: false, todoDate: new Date()
              },
              {
                todoId:3, todoName: "Book flight tickets", done: true, todoDate: new Date()
              }
          ]
          this.todos= todos;
      }

      deleteHandler(event) {
        alert(event.todoId);
        console.log(event)
      }
}