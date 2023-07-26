import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TaskService } from 'src/app/services/tasks/task.service';
import { FormTasks } from 'src/app/utils/forms/FormTasks';

type DataModal = {
  id: number;
  title: string;
  name: string;
  finished: boolean;
};
@Component({
  selector: 'app-form-tasks',
  templateUrl: './form-tasks.component.html',
  styleUrls: ['./form-tasks.component.scss'],
})
export class FormTasksComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  loadingState: boolean = false;
  @Input() updateTask = false;
  dataFromModal?: DataModal;
  constructor(
    private fb: FormBuilder,
    private modal: DynamicDialogRef,
    private taskService: TaskService,
    private dynamicConfigDialog: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.form = this.fb.nonNullable.group<FormTasks>({
      title: new FormControl(
        this.dynamicConfigDialog.data?.task.title
          ? this.dynamicConfigDialog.data?.task.title
          : undefined
      ),
      name: new FormControl(
        this.dynamicConfigDialog.data?.task.name
          ? this.dynamicConfigDialog.data?.task.name
          : undefined
      ),
      finished: new FormControl(
        this.dynamicConfigDialog.data?.task.finished
          ? this.dynamicConfigDialog.data?.task.finished
          : undefined
      ),
    });

    if (this.updateTask) {
      this.dataFromModal = this.dynamicConfigDialog.data.task;
    }
  }

  back() {
    this.modal.close();
  }

  submit() {
    this.loadingState = true;
    if (this.updateTask) {
      this.taskService
        .updateTaskById(this.dynamicConfigDialog.data?.task.id, this.form.value)
        .subscribe((response) => {
          this.loadingState = false;
          this.modal.close(this.form.value);
          this.dynamicConfigDialog.data.taskEmit.emit();
        });
    } else {
      this.taskService.addTask(this.form.value).subscribe((response) => {
        this.loadingState = false;
        this.modal.close(this.form.value);
      });
    }
  }
}
