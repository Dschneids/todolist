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

  editToDo() { }

  completeToDo() { }
}

interface ToDo {
  name: string;
  completed: boolean;
}
