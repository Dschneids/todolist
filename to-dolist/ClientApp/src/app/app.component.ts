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
    todo.value = "";
  }

  editToDo(key) {
    var editedToDo = prompt("Change the name?", this.toDoList[key].name);
    if (editedToDo != null) this.toDoList[key].name = editedToDo;
  }

  completeToDo(key) {
    this.toDoList[key].completed = true;
  }
}

interface ToDo {
  name: string;
  completed: boolean;
}
