import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { Tasks } from 'src/app/models/tasks/tasks';
import { TaskService } from 'src/app/services/tasks/task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss'],
})
export class ListTasksComponent implements OnInit {
  form?: FormGroup<{ finished: FormControl<boolean | null> }>;
  loadingState?: boolean;
  destroy$ = new Subject();
  tasks: Tasks[] = [];
  constructor(
    private taskService: TaskService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadingState = true;
    this.initTasks();
  }

  initTasks() {
    this.taskService
      .getTasks()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (tasks: Tasks[]) => {
          this.tasks = tasks.sort(
            (taskA, taskB) => +taskA.finished - +taskB.finished
          );
          this.loadingState = false;
        },
        (err) => {
          this.loadingState = false;
        }
      );
  }

  updateStatusTask({ id, finished }: { id: number; finished: boolean }) {
    this.taskService
      .updateStatusTask(id, !finished)
      .subscribe((item: Tasks) => {
        if (item) {
          this.tasks
            .filter((tasks: Tasks) => tasks.id === item.id)
            .forEach((element: Tasks) => {
              element = item;
            });
          if (item.finished) {
            this.messageService.add({
              severity: 'success',
              life: 1500,
              summary: 'Task finished',
            });
          } else {
            this.messageService.add({
              severity: 'info',
              life: 1500,
              summary: 'Task not finished',
            });
          }
        }
      });
  }

  itemAddedFromModal(task: Tasks) {
    this.taskService
      .getTasks()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (tasks: Tasks[]) => {
          this.tasks = tasks;
          this.loadingState = false;
        },
        (err) => {
          this.loadingState = false;
        }
      );
  }

  removedTask() {
    this.initTasks();
  }

  taskUpdate() {
    this.initTasks();
  }
}
