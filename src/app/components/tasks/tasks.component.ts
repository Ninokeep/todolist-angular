import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Tasks } from 'src/app/models/tasks/tasks';
import { TaskService } from 'src/app/services/tasks/task.service';
import { ModalAddTasksComponent } from '../add-tasks/modal-add-tasks/modal-add-tasks.component';

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
  loadingState: boolean = false;
  @Input() task!: Tasks;
  @Output() tasksStatusUpdate = new EventEmitter<TaskUpdated>();
  @Output() taskRemoved = new EventEmitter<any>();
  @Output() taskUpdate = new EventEmitter<any>();
  constructor(
    private taskService: TaskService,
    private dialogService: DialogService
  ) {}

  updateTask(id: number, finished: boolean) {
    this.tasksStatusUpdate.emit({ id, finished });
  }

  removeTaskById(taskId: number) {
    this.loadingState = true;
    this.taskService.removeTaskById(taskId).subscribe(
      (response) => {
        if (response) {
          this.taskRemoved.emit();
          this.loadingState = false;
        }
      },
      (err) => {
        this.loadingState = false;
      }
    );
  }

  updateTaskById(taskId: number, task: Tasks) {
    this.dialogService.open(ModalAddTasksComponent, {
      header: 'Update task',
      width: '40rem',
      data: {
        task: task,
        taskUpdate: true,
        taskEmit: this.taskUpdate,
      },
    });
  }
}
