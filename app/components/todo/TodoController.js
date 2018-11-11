import TodoService from "./TodoService.js"
//our TodoController is a class
//we want to export the class out of this file so that in our main.js we can import the class and instantiate it 
export default class TodoController {
  constructor() {
    //make sure your linked up... vv
    //console.log("TodoController is registered")
    this.todoService = new TodoService()
    this.todoService.GetTodos()
  }

  SubmitForm(event) {
    event.preventDefault()
    let form = event.target
    let description = form.newTodo.value
    console.log('did we get here?')
    //api.post('', { description }).then(getTodos)
    this.todoService.AddTodo({ description })
    form.reset()
  }
}

//