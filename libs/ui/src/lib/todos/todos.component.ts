import { Component, Input } from '@angular/core';
import { Todo } from '@nxapp/data';

@Component({
  selector: 'nxapp-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  @Input() todos: Todo[];
}
