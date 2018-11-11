import TodoController from "./app/components/todo/TodoController.js"

//entry point
//remember classes help us build objects!!!
//controllers communicate with the view
//We will have an app class and we will register all of our controllers and services to our application so that we can manage and handle things from this single entry point.
class App {
  constructor() {
    this.controllers = {
      TodoController: new TodoController
    }
  }
}

//we want to make a single instance of our application on the window object. So that we can reference things in the window... 

//we get a red squiggle because theres no such thing as an app property on window but we are going to be declaring it!


window.app = new App()

