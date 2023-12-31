import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tasks } from 'src/app/models/tasks/tasks';
import { HOST } from 'src/app/utils/env';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Array<Tasks>> {
    return this.http.get<Array<Tasks>>(`${HOST}/todos`);
  }

  updateStatusTask(id: number, finished: boolean): Observable<Tasks> {
    return this.http.put<Tasks>(`${HOST}/todos/${id}`, { finished });
  }

  addTask(task: Tasks): Observable<Tasks> {
    return this.http.post<Tasks>(`${HOST}/todos`, {
      title: task.title,
      name: task.name,
      finished: task.finished,
    });
  }

  removeTaskById(taskId: number): Observable<Tasks> {
    return this.http.delete<Tasks>(`${HOST}/todos/${taskId}`);
  }

  updateTaskById(taskId: number, task: Tasks) {
    return this.http.put<Tasks>(`${HOST}/todos/${taskId}`, { ...task });
  }
}
