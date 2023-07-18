import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tasks } from 'src/app/models/tasks/tasks';
import { TaskService } from 'src/app/services/tasks/task.service';

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
  @Output() taskRemoved = new EventEmitter<any>();

  constructor(private taskService: TaskService) {}
  updateTask(id: number, finished: boolean) {
    this.tasksUpdate.emit({ id, finished });
  }

  removeTaskById(taskId: number) {
    this.taskService.removeTaskById(taskId).subscribe((response) => {
      if (response) {
        this.taskRemoved.emit();
      }
    });
  }
}
