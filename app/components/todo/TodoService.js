//our TodoService will be a class that we want to export.. 
//the api is locally scoped. the service can use it but noone else can.
let api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/jake/todos'
})

export default class TodoService {
  constructor() {

  }

  GetTodos() {
    api.get('').then(res => {
      console.log(res.data.data)
    })
  }

  AddTodo(newTodo) {
    api.post('', newTodo)
  }

}