import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tasks } from 'src/app/models/tasks/tasks';

export type TaskUpdated = {
  id: number;
  finished: boolean;
};

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  @Input() task!: Tasks;

  @Output() tasksUpdate = new EventEmitter<TaskUpdated>();

  updateTask(id: number, finished: boolean) {
    this.tasksUpdate.emit({ id, finished });
  }
}
