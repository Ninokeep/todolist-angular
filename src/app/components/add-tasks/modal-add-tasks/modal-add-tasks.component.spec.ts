import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddTasksComponent } from './modal-add-tasks.component';

describe('ModalAddTasksComponent', () => {
  let component: ModalAddTasksComponent;
  let fixture: ComponentFixture<ModalAddTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
