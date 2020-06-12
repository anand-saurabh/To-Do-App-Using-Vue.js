const app = new Vue({
el: '#app',
data: {
  title: 'To Do Items',
  newTodo: '',
  todos: []
},
methods:
{
  addTodo()
  {
    this.todos.push({
      title: this.newTodo,
      done : false
    })
    this.newTodo = '';
  },
  removeTodo(todo)
  {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  },
  allDone()
  {
    this.todos.forEach(todo => {
      todo.done = true;
    });
  }
}
});
