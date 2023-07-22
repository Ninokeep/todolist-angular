import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-add-tasks',
  templateUrl: './modal-add-tasks.component.html',
  styleUrls: ['./modal-add-tasks.component.scss'],
})
export class ModalAddTasksComponent implements OnInit {
  updateTask: boolean = false;
  constructor(private dynamicDialogConfig: DynamicDialogConfig) {}
  ngOnInit(): void {
    this.updateTask = this.dynamicDialogConfig.data?.taskUpdate
      ? this.dynamicDialogConfig.data.taskUpdate
      : false;
  }
}
