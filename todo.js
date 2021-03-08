import { LightningElement, track} from 'lwc';

export default class Todo extends LightningElement {
    @track todos = [];
    connectedCallback(){
        this.populateTodos();
        console.log(JSON.stringify(this.todos));
    }
    addTodoHandler() {
        const inputBox = this.template.querySelector("lightning-input");
        const todo = { todoId:this.todos.length, todoName: inputBox.value, done: false, todoDate: new Date()};
        this.todos.unshift(todo);
        inputBox.value="";
        console.log(JSON.stringify(this.todos));
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
        let idToDelete = event.target.name;
        let todoTasks = this.todos;
        let todoTaskIndex;
        for(let i=0; i<todoTasks.length; i++) {
          if(idToDelete === todoTasks[i].todoId) {
              todoTaskIndex = i;
          }
        }
        this.todos.splice(todoTaskIndex, 1);
      }

      updateHandler(event){
        let idToDelete = event.target.name;
        let todoTasks = this.todos;
        let todoTaskIndex;
        for(let i=0; i<todoTasks.length; i++) {
          if(idToDelete === todoTasks[i].todoId) {
              todoTasks[i].done= true;
          }
        }
        populateTodos();
      }

      updateHandlerDone(event){
        let idToDelete = event.target.name;
        let todoTasks = this.todos;
        let todoTaskIndex;
        for(let i=0; i<todoTasks.length; i++) {
          if(idToDelete === todoTasks[i].todoId) {
              todoTasks[i].done= false;
          }
        }
        populateTodos();
      }
}