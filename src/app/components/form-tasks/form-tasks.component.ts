import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { HOST } from 'src/app/utils/env';
import { FormTasks } from 'src/app/utils/forms/FormTasks';

@Component({
  selector: 'app-form-tasks',
  templateUrl: './form-tasks.component.html',
  styleUrls: ['./form-tasks.component.scss'],
})
export class FormTasksComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  loadingState: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private modal: DynamicDialogRef
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
    console.log(this.form.get('title')?.value);

    /*
    this.http.post(`${HOST}/todos`, {
      title: this.form?.get('title'),
    });
    */
  }
}
