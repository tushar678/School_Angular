import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StTeacherEditComponent } from './st-teacher-edit.component';

describe('StTeacherEditComponent', () => {
  let component: StTeacherEditComponent;
  let fixture: ComponentFixture<StTeacherEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StTeacherEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StTeacherEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
