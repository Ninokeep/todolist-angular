import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Tasks } from 'src/app/models/tasks/tasks';
import { TaskService } from 'src/app/services/tasks/task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss'],
})
export class ListTasksComponent implements OnInit {
  destroy$ = new Subject();

  tasks: Array<Tasks> = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService
      .getTasks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((tasks: Array<Tasks>) => {
        this.tasks = tasks;
      });
  }
}
