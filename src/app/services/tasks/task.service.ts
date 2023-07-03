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
}
