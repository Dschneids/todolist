import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  toDoList: Array<ToDo> = [{
    name: "Im an example",
    completed: false
  }];

  addToDo(todo) {
    this.toDoList.push(
      {
        name: todo.value,
        completed: false
      }
    );
  }

  editToDo(key) {
    var editedToDo = prompt("Change the name?", this.toDoList[key].name);
    if (editedToDo != null) this.toDoList[key].name = editedToDo;
  }

  completeToDo() { }
}

interface ToDo {
  name: string;
  completed: boolean;
}
