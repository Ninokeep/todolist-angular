import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tasks } from 'src/app/models/tasks/tasks';

@Component({
  selector: 'app-modal-add-tasks',
  templateUrl: './modal-add-tasks.component.html',
  styleUrls: ['./modal-add-tasks.component.scss'],
})
export class ModalAddTasksComponent implements OnInit {
  ngOnInit(): void {}

  getItemAdded(item: Tasks) {
    this.itemAdded.emit(item);
  }

  @Output() itemAdded = new EventEmitter<Tasks>();
}
