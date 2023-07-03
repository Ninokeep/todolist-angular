import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  destroy$ = new Subject();
  tasks: Tasks[] = [];
  constructor(
    private taskService: TaskService,
    private fb: FormBuilder,
    private ms: MessageService
  ) {}

  ngOnInit(): void {
    this.taskService
      .getTasks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((tasks: Tasks[]) => {
        this.tasks = tasks;
      });
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
          this.ms.add({
            severity: 'success',
            life: 1500,
            summary: 'Task updated',
          });
        }
      });
  }
}
