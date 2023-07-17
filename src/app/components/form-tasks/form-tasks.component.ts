import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Tasks } from 'src/app/models/tasks/tasks';
import { TaskService } from 'src/app/services/tasks/task.service';
import { FormTasks } from 'src/app/utils/forms/FormTasks';

@Component({
  selector: 'app-form-tasks',
  templateUrl: './form-tasks.component.html',
  styleUrls: ['./form-tasks.component.scss'],
})
export class FormTasksComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  loadingState: boolean = false;

  @Output() itemAdded = new EventEmitter<Tasks>();

  constructor(
    private fb: FormBuilder,
    private modal: DynamicDialogRef,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.nonNullable.group<FormTasks>({
      title: new FormControl(),
      name: new FormControl(),
      finished: new FormControl(),
    });
  }

  back() {
    this.modal.close();
  }

  submit() {
    this.loadingState = true;
    this.taskService.addTask(this.form.value).subscribe((response) => {
      this.loadingState = false;
      this.modal.close(this.form.value);
    });
    this.itemAdded.emit(this.form.value);
  }
}
